import { Db, MongoClient } from "mongodb";

const {
  ENV,

  DB,
  DB_HOST,
  DB_PORT,
  DB_POOL_MIN,
  DB_POOL,

  USER,
  PASS
} = process.env;
const urlDb = `mongodb://${USER}:${PASS}@${DB_HOST}:${DB_PORT}/${DB}?authSource=admin`;

let client: MongoClient;
let db: Db;

async function createClient (): Promise<MongoClient> {
  const client = new MongoClient(urlDb);
  await client.connect();
  return client;
}

async function createClientPool (): Promise<MongoClient> {
  const client = new MongoClient(
    urlDb,
    { minPoolSize: Number(DB_POOL_MIN), maxPoolSize: Number(DB_POOL) }
  );
  await client.connect();
  return client;
}

async function createConnMongo (): Promise<void> {
  if (client) return;
  client = ENV === 'dev'
    ? await createClient()
    : await createClientPool();
  db = client.db(DB);
}

function getConnMongo (): [MongoClient, Db] {
  return [
    client,
    db
  ];
}

export {
  createConnMongo,
  getConnMongo
}
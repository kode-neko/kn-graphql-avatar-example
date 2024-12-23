import { Collection, Db, MongoClient, ObjectId } from "mongodb";
import { NotFoundDB } from "../../db/error";
import { ICategoryDb } from "../../db/interface";
import { CategoryMongo } from "../interface";
import { getConnMongo } from "../utils";
import { Category, Element } from "../../../model";
import { parseCategoryToMongo, parseMongoToCategory } from "../parsers";

class ICategoryDbMongo implements ICategoryDb {

  private client: MongoClient;
  private db: Db;
  private categoryColl: Collection<CategoryMongo>;
  private static _instance: ICategoryDbMongo;

  private constructor() {
    [this.client, this.db] = getConnMongo();
    this.categoryColl = this.db.collection('avatar');
  }

  public static getInstance(): ICategoryDbMongo {
    if (ICategoryDbMongo._instance)
      this._instance = new ICategoryDbMongo();
    return ICategoryDbMongo._instance;
  }

  read(id: string): NotFoundDB | Promise<Category> {
    return this.categoryColl
      .findOne({ id: new ObjectId(id) })
      .then(res => {
        if (!res) throw new NotFoundDB('Category')
        return parseMongoToCategory(res)
    })
  }

  readList(skip: number, limit: number): NotFoundDB | Promise<Category[]> {
    return this.categoryColl
      .find({}, { skip, limit })
      .toArray()
      .then(list => list.map(parseMongoToCategory))
  }

  create(obj: Category): NotFoundDB | Promise<Category> {
    const mongo = parseCategoryToMongo(obj);
    return this.categoryColl
      .insertOne(mongo)
      .then(({ insertedId: _id }) =>
        parseMongoToCategory({ ...mongo, _id }))
  }
  update(obj: Category): (Promise<void> | NotFoundDB) {
    const { id, ...rest } = obj;
    return this.categoryColl
      .updateOne({ _id: new ObjectId(id) }, { ...rest })
      .then(({modifiedCount}) => {
        if (modifiedCount === 0) throw new NotFoundDB('Category')
    })
  }
  delete(id: string): (Promise<void> | NotFoundDB) {
    return this.categoryColl
      .deleteOne({ _id: new ObjectId(id) })
      .then(({deletedCount}) => {
        if (deletedCount === 0) throw new NotFoundDB('Category')
    })
  }

  createElement(idCategory: string, element: Element): (Promise<Category> | NotFoundDB) {
    throw new Error("Method not implemented.");
  }
  updateElement(idCategory: string, element: Element): (Promise<void> | NotFoundDB) {
    throw new Error("Method not implemented.");
  }
  deleteElement(idCategory: string, nameElement: string): (Promise<void> | NotFoundDB) {
    throw new Error("Method not implemented.");
  }

} 

export default ICategoryDbMongo;
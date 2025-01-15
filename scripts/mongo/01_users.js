const {
  DB_HOST,
  PASS_ROOT,
  USER_ADMIN,
  PASS_ADMIN,
  USER,
  PASS
} = process.env;

const conn = Mongo(`mongodb://root:${PASS_ROOT}@${DB_HOST}:27017`);
const db = conn.getDB('admin');

try {
  db.createUser({
    user: USER_ADMIN,
    pwd: PASS_ADMIN,
    roles: [
      { role: 'dbOwner', db: 'gql-avatar' }
    ],
    comment: 'The admin for "gql-avatar" database'
  });

  db.createUser({
    user: USER,
    pwd: PASS,
    roles: [
      { role: 'readWrite', db: 'gql-avatar' }
    ],
    comment: 'The user for "gql-avatar" database CRUD ops'
  });

  console.log(`Users added succesfully 😎`);

} catch (err) {
  console.log('USER: ' + USER)
  console.log('USER_ADMIN: ' + USER_ADMIN)
  console.log(`Users couldn't be added... 🤦`);
  console.log(err);
}

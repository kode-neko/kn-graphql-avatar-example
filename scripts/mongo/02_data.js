const {
  DB,
  DB_HOST,
  DB_PORT,
  USER,
  PASS
} = process.env;

try {
  const conn = Mongo(`mongodb://${USER}:${PASS}@${DB_HOST}:27017`);
  const db = conn.getDB(DB);

  db.category.insertMany([
    {
      _id: new ObjectId('676931fd5bb82026cdef4103'),
      name: 'hat',
      colors: ['red', 'green', 'blue'],
      elementList: [
        { name: 'bonet', pic: '' },
        { name: 'fedora', pic: '' },
        { name: 'clip', pic: '' }
      ],
    },
    {
      _id: new ObjectId('676932d25bb82026cdef4107'),
      name: 'hair',
      colors: ['blonde', 'black', 'ginder', 'brown'],
      elementList: [
        { name: 'short', pic: '' },
        { name: 'ponytail', pic: '' }
      ],
    },
    {
      _id: new ObjectId('676932d55bb82026cdef4108'),
      name: 'eyes',
      colors: ['blue', 'brown', 'green', 'gray', 'amber'],
      elementList: [
        { name: 'normal', pic: '' },
        { name: 'close', pic: '' },
        { name: 'chinesse', pic: '' },
      ],
    },
    {
      _id: new ObjectId('676932da5bb82026cdef4109'),
      name: 'mouth',
      colors: ['red', 'pink', 'orange'],
      elementList: [
        { name: 'normal', pic: '' },
        { name: 'smile', pic: '' },
        { name: 'close', pic: '' }
      ],
    },
    {
      _id: new ObjectId('676932de5bb82026cdef410a'),
      name: 'clothes',
      colors: ['red', 'green', 'blue', 'purple'],
      elementList: [
        { name: 'shirt', pic: '' },
        { name: 'robe', pic: '' },
        { name: 'naked', pic: '' }
      ],
    }
  ]);
  db.category.createIndex({ "name": 1 }, { unique: true });

  db.avatar.insertMany([
    {
      _id: new ObjectId('676932e35bb82026cdef410b'),
      name: 'my avatar',

      hat: { name: 'bonet', color: 'red' },
      hair: { name: 'ponytail', color: 'black' },
      eyes: { name: 'chinesse', color: 'green' },
      mouth: { name: 'smile', color: 'pink' },
      clothes: { name: 'shirt', color: 'purple' }
    }
  ]);

  db.user.insertMany([
    {
      _id: new ObjectId('676932e65bb82026cdef410c'),
      userName: 'kodeneko',
      email: 'kodeneko@mail.com',
      pass: '',
      salt: '',

      avatar: [new ObjectId('676932e35bb82026cdef410b')]
    }
  ]);


  console.log(`Data added succesfully 😎`);

} catch (err) {
  console.log(`Data couldn't be added... 🤦`);
  console.log(err);
}

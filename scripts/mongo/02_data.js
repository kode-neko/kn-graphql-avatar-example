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
  
  db.user.insertMany([
    {
      userName: 'kodeneko',
      email: 'kodeneko@mail.com',
      pass: '',
      salt: '',
    }
  ]);
  
  db.category.insertMany([
    {
      name: 'hat',
      colors: ['red', 'green', 'blue'],
      elementList: [
        {name: 'bonet',pic: ''},
        {name: 'fedora',pic: ''},
        {name: 'clip',pic: ''}
      ],
    },
    {
      name: 'hair',
      colors: ['blonde', 'black', 'ginder', 'brown'],
      elementList: [
        { name: 'short',pic: ''},
        {name: 'ponytail',pic: ''}
      ],
    },
    {
      name: 'eyes',
      colors: ['blue', 'brown', 'green', 'gray', 'amber'],
      elementList: [
        {name: 'normal',pic: ''},
        { name: 'close', pic: '' },
        {name: 'chinesse',pic: ''},
      ],
    },
    {
      name: 'mouth',
      colors: ['red', 'pink', 'orange'],
      elementList: [
        { name: 'normal', pic: '' },
        {name: 'smile',pic: ''},
        {name: 'close',pic: ''}
      ],
    },
    {
      name: 'clothes',
      colors: ['red', 'green', 'blue', 'purple'],
      elementList: [
        { name: 'shirt', pic: '' },
        {name: 'robe',pic: ''},
        {name: 'naked',pic: ''}
      ],
    }
  ]);
  
  db.avatar.insertMany([
    {
      name: 'my avatar',
      hat: {name: 'bonet', color:'red'},
      hair: {name: 'ponytail', color:'black'},
      eyes: {name: 'chinesse', color:'green'},
      mouth: {name: 'smile', color:'pink'},
      clothes: {name: 'shirt', color:'purple'}
    }
  ])
  
  console.log(`Data added succesfully 😎`);

} catch (err) {
  console.log(`Data couldn't be added... 🤦`);
  console.log(err);
}

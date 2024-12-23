interface UserMongo {
  _id?: string;
  userName: string;
  email: string;
  pass: string;
  salt: string;
}

export {
  UserMongo
}
interface User {
  id?: string;
  userName: string;
  email: string;
  pass: string;
  salt: string;
}

type UserApp = Omit<User, 'pass' | 'salt'>

export {
  User,
  UserApp
}
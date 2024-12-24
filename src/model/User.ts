import { Avatar } from "./Avatar";

interface User {
  id?: string;
  userName: string;
  email: string;
  pass: string;
  salt: string;

  avatarList: Avatar[];
}

type UserApp = Omit<User, 'pass' | 'salt'>

export {
  User,
  UserApp
}
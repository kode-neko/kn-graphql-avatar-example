import { ObjectId } from "mongodb";
import { AvatarMongo } from "./AvatarMongo";

interface UserMongo {
  _id?: ObjectId;
  userName: string;
  email: string;
  pass: string;
  salt: string;

  avatarList: AvatarMongo['_id'][]
}

export {
  UserMongo
}
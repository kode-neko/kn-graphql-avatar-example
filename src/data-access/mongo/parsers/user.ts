import { ObjectId } from "mongodb";
import { User } from "../../../model";
import { AvatarMongo, UserMongo } from "../interface";

function parseMongoToUser(userMongo: Omit<UserMongo, 'avatarList'>, avatarListMongo: AvatarMongo[]): User {
  return {
    id: userMongo._id?.toString(),
    userName: userMongo.userName,
    email: userMongo.email,
    pass: userMongo.pass,
    salt: userMongo.salt,
  
    avatarList: avatarListMongo
  }
}

function parseMUserToMongo(user: User): UserMongo {
  return {
    _id: new ObjectId(user.id),
    userName: user.userName,
    email: user.email,
    pass: user.pass,
    salt: user.salt,
  
    avatarList: user.avatarList.map(a => new ObjectId(a.id))
  }
}

export {
  parseMongoToUser,
  parseMUserToMongo
}
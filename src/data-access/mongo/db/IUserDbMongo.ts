import { Collection, Db, MongoClient, ObjectId } from "mongodb";
import { User } from "../../../model";
import { NotFoundDB } from "../../db/error";
import { IUserDb } from "../../db/interface";
import { AvatarMongo, UserMongo } from "../interface";
import { getConnMongo } from "../utils";
import { parseAvatarToMongo, parseMongoToUser, parseMUserToMongo } from "../parsers";

class IUserDbMongo implements IUserDb {

  private client: MongoClient;
  private db: Db;
  private userColl: Collection<UserMongo>;
  private static _instance: IUserDbMongo;

  private constructor() {
    [this.client, this.db] = getConnMongo();
    this.userColl = this.db.collection('avatar');
  }

  public static getInstance(): IUserDbMongo {
    if (IUserDbMongo._instance)
      IUserDbMongo._instance = new IUserDbMongo();
    return IUserDbMongo._instance;
  }

  private lookupAvatar = {
    $lookup: {
      from: "avatar",
      localField: "avatarList",
      foreignField: "_id",
      as: "avatarList",
    }
  }

  read(id: string): NotFoundDB | Promise<User> {
    return this.userColl
      .aggregate([
        {$match: {_id: new ObjectId(id)}},
        this.lookupAvatar
      ])
      .toArray()
      .then(list => {
        if (list.length === 0) throw new NotFoundDB('User');
        const { avatarList, ...rest } = list[0];
        return parseMongoToUser(
          rest as Omit<UserMongo, 'avatarList'>,
          avatarList as AvatarMongo[]
        )
    })
  }

  readList(skip: number, limit: number): NotFoundDB | Promise<User[]> {
    return this.userColl
      .aggregate([
        this.lookupAvatar,
        {$skip: skip, $limit: limit}
      ])
      .toArray()
      .then(list => {
        return list.map(e => {
          const { avatarList, ...rest } = e;
          return parseMongoToUser(
            rest as Omit<UserMongo, 'avatarList'>,
            avatarList as AvatarMongo[]
          )
        })
    })
  }

  create(obj: User): NotFoundDB | Promise<User> {
    const mongo = parseMUserToMongo(obj);
    const avatarMongoList = obj.avatarList.map(parseAvatarToMongo)
    return this.userColl
      .insertOne(mongo)
      .then(({ insertedId: _id }) =>
        parseMongoToUser({ ...mongo, _id }, avatarMongoList))
  }

  update(obj: User): (Promise<void> | NotFoundDB) {
    const { id, ...rest } = obj;
    return this.userColl
      .updateOne({ _id: new ObjectId(id) }, { ...rest })
      .then(({modifiedCount}) => {
        if (modifiedCount === 0) throw new NotFoundDB('User')
    })
  }

  delete(id: string): (Promise<void> | NotFoundDB) {
    return this.userColl
      .deleteOne({ _id: new ObjectId(id) })
      .then(({deletedCount}) => {
        if (deletedCount === 0) throw new NotFoundDB('User')
    })
  }

} 

export default IUserDbMongo;
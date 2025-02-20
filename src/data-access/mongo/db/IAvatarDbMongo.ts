import { Collection, Db, MongoClient, ObjectId } from "mongodb";
import { Avatar, CustomElement } from "../../../model";
import { NotFoundDB } from "../../db/error";
import { IAvatarDb } from "../../db/interface";
import { getConnMongo } from "../utils";
import { AvatarMongo } from "../interface";
import { parseElementToMongo, parseMongoToAvatar } from "../parsers";
import { parseAvatarToMongo, parseCustomElementToMongo } from "../parsers/avatar";

class IAvatarDbMongo implements IAvatarDb {

  private client: MongoClient;
  private db: Db;
  private avatarColl: Collection<AvatarMongo>;
  private static _instance: IAvatarDbMongo;

  private constructor()  {
    [this.client, this.db] = getConnMongo();
    this.avatarColl = this.db.collection('avatar');
  }

  public static getInstance(): IAvatarDbMongo {
    if (!IAvatarDbMongo._instance)
      IAvatarDbMongo._instance = new IAvatarDbMongo();
    return IAvatarDbMongo._instance;
  }

  read(id: string): NotFoundDB | Promise<Avatar> {
    return this.avatarColl
      .findOne({ _id: new ObjectId(id) })
      .then(res => {
        if (!res) throw new NotFoundDB('Avatar')
        return parseMongoToAvatar(res)
    })
  }

  readList(skip: number, limit: number): NotFoundDB | Promise<Avatar[]> {
    return this.avatarColl
      .find({}, { skip, limit })
      .toArray()
      .then(list => list.map(parseMongoToAvatar))
  }

  create(obj: Avatar): NotFoundDB | Promise<Avatar> {
    const mongo = parseAvatarToMongo(obj);
    return this.avatarColl
      .insertOne(mongo)
      .then(({ insertedId: _id }) =>
        parseMongoToAvatar({ ...mongo, _id }))
  }
  update(obj: Avatar): (Promise<void> | NotFoundDB) {
    const { id, ...rest } = obj;
    return this.avatarColl
      .updateOne({ _id: new ObjectId(id) }, { ...rest })
      .then(({modifiedCount}) => {
        if (modifiedCount === 0) throw new NotFoundDB('Avatar')
    })
  }
  delete(id: string): (Promise<void> | NotFoundDB) {
    return this.avatarColl
      .deleteOne({ _id: new ObjectId(id) })
      .then(({deletedCount}) => {
        if (deletedCount === 0) throw new NotFoundDB('Avatar')
    })
  }

  updateCustomElement(idAvatar: string, nameCategory: string, customElement: CustomElement): (Promise<void> | NotFoundDB) {
    const elementMongo = parseCustomElementToMongo(customElement);
    throw this.avatarColl
      .updateOne(
        { _id: new ObjectId(idAvatar) },
        { [nameCategory]: elementMongo }
      )
      .then(({ modifiedCount }) => {
        if (modifiedCount === 0) throw new NotFoundDB('Avatar')
      });
  }

  deleteCustomElement(idAvatar: string, nameCategory: string): (Promise<void> | NotFoundDB) {
    throw this.avatarColl
      .updateOne(
        { _id: new ObjectId(idAvatar) },
        { $unset: { [nameCategory]: "" } }
      )
      .then(({ modifiedCount }) => {
        if (modifiedCount === 0) throw new NotFoundDB('Avatar')
      });
  }
} 

export default IAvatarDbMongo;
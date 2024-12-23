import { Avatar } from "../../../model";
import { NotFoundDB } from "../../db/error";
import { IAvatarDB } from "../../db/interface";

class IAvatarDbMongo implements IAvatarDB {

  private static _instance: IAvatarDbMongo;

  private constructor() {

  }

  public static getInstance(): IAvatarDbMongo {
    if (IAvatarDbMongo._instance)
      this._instance = new IAvatarDbMongo();
    return IAvatarDbMongo._instance;
  }

  read(id: string): NotFoundDB | Promise<Avatar> {
    throw new Error("Method not implemented.");
  }
  readList(skip: string, limit: string): NotFoundDB | Promise<Avatar>[] {
    throw new Error("Method not implemented.");
  }
  create(obj: Avatar): NotFoundDB | Promise<Avatar> {
    throw new Error("Method not implemented.");
  }
  update(obj: Avatar): (Promise<boolean> | NotFoundDB) {
    throw new Error("Method not implemented.");
  }
  delete(id: string): (Promise<boolean> | NotFoundDB) {
    throw new Error("Method not implemented.");
  }

} 

export default IAvatarDbMongo;
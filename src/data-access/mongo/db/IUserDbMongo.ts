import { User } from "../../../model";
import { NotFoundDB } from "../../db/error";
import { IUserDB } from "../../db/interface";

class IUserDbMongo implements IUserDB {

  private static _instance: IUserDbMongo;

  private constructor() {

  }

  public static getInstance(): IUserDbMongo {
    if (IUserDbMongo._instance)
      this._instance = new IUserDbMongo();
    return IUserDbMongo._instance;
  }

  read(id: string): NotFoundDB | Promise<User> {
    throw new Error("Method not implemented.");
  }
  readList(skip: string, limit: string): NotFoundDB | Promise<User>[] {
    throw new Error("Method not implemented.");
  }
  create(obj: User): NotFoundDB | Promise<User> {
    throw new Error("Method not implemented.");
  }
  update(obj: User): (Promise<boolean> | NotFoundDB) {
    throw new Error("Method not implemented.");
  }
  delete(id: string): (Promise<boolean> | NotFoundDB) {
    throw new Error("Method not implemented.");
  }

} 

export default IUserDbMongo;
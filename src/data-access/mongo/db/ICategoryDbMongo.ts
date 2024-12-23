import { Category } from "../../../model";
import { NotFoundDB } from "../../db/error";
import { ICategoryDB } from "../../db/interface";

class ICategoryDbMongo implements ICategoryDB {

  private static _instance: ICategoryDbMongo;

  private constructor() {

  }

  public static getInstance(): ICategoryDbMongo {
    if (ICategoryDbMongo._instance)
      this._instance = new ICategoryDbMongo();
    return ICategoryDbMongo._instance;
  }

  read(id: string): NotFoundDB | Promise<Category> {
    throw new Error("Method not implemented.");
  }
  readList(skip: string, limit: string): NotFoundDB | Promise<Category>[] {
    throw new Error("Method not implemented.");
  }
  create(obj: Category): NotFoundDB | Promise<Category> {
    throw new Error("Method not implemented.");
  }
  update(obj: Category): (Promise<boolean> | NotFoundDB) {
    throw new Error("Method not implemented.");
  }
  delete(id: string): (Promise<boolean> | NotFoundDB) {
    throw new Error("Method not implemented.");
  }

} 

export default ICategoryDbMongo;
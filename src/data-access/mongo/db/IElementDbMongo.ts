import { Element } from "../../../model";
import { NotFoundDB } from "../../db/error";
import { IElementDB } from "../../db/interface";

class IElementDbMongo implements IElementDB {

  private static _instance: IElementDbMongo;

  private constructor() {

  }

  public static getInstance(): IElementDbMongo {
    if (IElementDbMongo._instance)
      this._instance = new IElementDbMongo();
    return IElementDbMongo._instance;
  }

  read(id: string): NotFoundDB | Promise<Element> {
    throw new Error("Method not implemented.");
  }
  readList(skip: string, limit: string): NotFoundDB | Promise<Element>[] {
    throw new Error("Method not implemented.");
  }
  create(obj: Element): NotFoundDB | Promise<Element> {
    throw new Error("Method not implemented.");
  }
  update(obj: Element): (Promise<boolean> | NotFoundDB) {
    throw new Error("Method not implemented.");
  }
  delete(id: string): (Promise<boolean> | NotFoundDB) {
    throw new Error("Method not implemented.");
  }

} 

export default IElementDbMongo;
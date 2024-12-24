import { Category, Element } from "../../../model";
import { NotFoundDB } from "../error";
import IModelDb from "./IModelDb";

interface ICategoryDB extends IModelDb<Category> {
  createElement(idCategory: string, element: Element): (Promise<Category> | NotFoundDB);
  updateElement(idCategory: string, element: Element): (Promise<void> | NotFoundDB);
  deleteElement(idCategory: string, nameElement: string): (Promise<void> | NotFoundDB);
}

export default ICategoryDB;
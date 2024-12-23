import { Avatar, CustomElement } from "../../../model";
import { NotFoundDB } from "../error";
import IModelDb from "./IModelDb";

interface IAvatarDB extends IModelDb<Avatar>{
  createCustomElement(idAvatar: string, element: CustomElement): (Promise<Avatar> | NotFoundDB);
  updateCustomElement(idAvatar: string, element: CustomElement): (Promise<void> | NotFoundDB);
  deleteCustomElement(idAvatar: string, nameCustomElement: string): (Promise<void> | NotFoundDB);
}

export default IAvatarDB;
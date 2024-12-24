import { Avatar, CustomElement } from "../../../model";
import { NotFoundDB } from "../error";
import IModelDb from "./IModelDb";

interface IAvatarDB extends IModelDb<Avatar>{
  updateCustomElement(idAvatar: string, nameCategory: string, customElement: CustomElement): (Promise<void> | NotFoundDB);
  deleteCustomElement(idAvatar: string, nameCategory: string, ): (Promise<void> | NotFoundDB);
}

export default IAvatarDB;
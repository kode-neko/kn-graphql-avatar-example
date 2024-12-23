import { ObjectId } from "mongodb";
import { CategoryMongo } from "./CategoryMongo";

interface CustomElementMongo {
  element: string;
  color: CategoryMongo['colors'][number];
}

interface AvatarMongo {
  _id?: ObjectId;
  name: string;

  hat: CustomElementMongo;
  hair: CustomElementMongo;
  eyes: CustomElementMongo;
  mouth: CustomElementMongo;
  clothes: CustomElementMongo;
}

export {
  CustomElementMongo,
  AvatarMongo
}
import { CategoryMongo } from "./CategoryMongo";

interface CustomElementMongo {
  name: string;
  color: CategoryMongo['colors'][number];
}

interface AvatarMongo {
  _id?: string;
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
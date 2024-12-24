import { ObjectId } from "mongodb";

interface ElementMongo {
  name: string;
  pic: string;
}

interface CategoryMongo {
  _id?: ObjectId;
  name: string;
  colors: string[];
  elementList: ElementMongo[];
}

export {
  ElementMongo,
  CategoryMongo
}
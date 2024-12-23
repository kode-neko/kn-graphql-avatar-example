import { ObjectId } from "mongodb";
import { Category, Element } from "../../../model";
import { CategoryMongo, ElementMongo } from "../interface";

function parseMongoToElement(elementMongo: ElementMongo): Element {
  return {
    name: elementMongo.name,
    pic: elementMongo.pic
  };
}

function parseElementToMongo(element: Element): ElementMongo {
  return {
    name: element.name,
    pic: element.pic,
  }
}

function parseMongoToCategory(categoryMongo: CategoryMongo): Category {
  return {
    id: categoryMongo._id?.toString(),
    name: categoryMongo.name,
    colors: categoryMongo.colors,
    elementList: categoryMongo.elementList.map(parseMongoToElement),
  };
}

function parseCategoryToMongo(category: Category): CategoryMongo {
  return {
    _id: new ObjectId(category.id),
    name: category.name,
    colors: category.colors,
    elementList: category.elementList.map(parseElementToMongo),
  }
}

export {
  parseMongoToCategory,
  parseCategoryToMongo
}
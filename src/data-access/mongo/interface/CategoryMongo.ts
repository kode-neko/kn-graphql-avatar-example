interface ElementMongo {
  name: string;
  pic: string;
}

interface CategoryMongo {
  _id?: string;
  name: string;
  colors: string[];
  elementList: ElementMongo[];
}

export {
  ElementMongo,
  CategoryMongo
}
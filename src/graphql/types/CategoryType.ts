import {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString
} from "graphql";
import { ElementType } from "./ElementType";

const CategoryType = new GraphQLObjectType({
  name: 'Category',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    colors: { type: new GraphQLList(GraphQLString) },

    elementList: { type: new GraphQLList(ElementType) }
  }
});

export { CategoryType }
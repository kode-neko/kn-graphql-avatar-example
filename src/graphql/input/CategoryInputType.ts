import {
  GraphQLInputObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString
} from "graphql";
import { ElementInputType } from "./ElementInputType";

const CategoryInputType = new GraphQLInputObjectType({
  name: 'CategoryInput',
  fields: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    colors: { type: new GraphQLList(GraphQLString) },
    elementList: { type: new GraphQLList(ElementInputType) }
  },
});

export {CategoryInputType}
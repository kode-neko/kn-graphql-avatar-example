import {
  GraphQLID,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString
} from "graphql";
import { ElementType } from "./ElementType";

const CustomElementType = new GraphQLObjectType({
  name: 'CustomElement',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    selected: { type: ElementType },
    color: { type: new GraphQLNonNull(GraphQLString) }
  }
});

export { CustomElementType }
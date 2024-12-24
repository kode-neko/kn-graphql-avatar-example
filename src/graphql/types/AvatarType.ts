import {
  GraphQLID,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString
} from "graphql";
import { CustomElementType } from "./CustomElementType";

const AvatarType = new GraphQLObjectType({
  name: 'Avatar',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },

    hat: { type: CustomElementType },
    hair: { type: CustomElementType },
    eyes: { type: CustomElementType },
    mouth: { type: CustomElementType },
    clothes: { type: CustomElementType }
  }
});

export { AvatarType }
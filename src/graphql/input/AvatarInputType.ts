import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString
} from "graphql";
import { CustomElementInputType } from "./CustomElementInputType";

const AvatarInputType = new GraphQLInputObjectType({
  name: 'AvatarInput',
  fields: {
    name: { type: new GraphQLNonNull(GraphQLString) },

    hat: { type: new GraphQLNonNull(CustomElementInputType) },
    hair: { type: new GraphQLNonNull(CustomElementInputType) },
    eyes: { type: new GraphQLNonNull(CustomElementInputType) },
    mouth: { type: new GraphQLNonNull(CustomElementInputType) },
    clothes: { type: new GraphQLNonNull(CustomElementInputType) }
  },
});

export {AvatarInputType}
import {
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString
} from "graphql";

const CustomElementInputType = new GraphQLInputObjectType({
  name: 'CustomElementInput',
  fields: {
    selected: { type: new GraphQLNonNull(GraphQLID) },
    color: { type: new GraphQLNonNull(GraphQLString) }
  },
});

export {CustomElementInputType}
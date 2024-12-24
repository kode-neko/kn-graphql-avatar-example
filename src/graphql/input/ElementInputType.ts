import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString
} from "graphql";

const ElementInputType = new GraphQLInputObjectType({
  name: 'ElementInput',
  fields: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    pic: { type: new GraphQLNonNull(GraphQLString) }
  },
});

export {ElementInputType}
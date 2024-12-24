import {
  GraphQLID,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString
} from "graphql";

const ElementType = new GraphQLObjectType({
  name: 'Element',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    pic: { type: new GraphQLNonNull(GraphQLString) },
    categoryName: { type: new GraphQLNonNull(GraphQLString) }
  }
});

export { ElementType }
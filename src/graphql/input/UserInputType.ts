import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString
} from "graphql";

const UserInputType = new GraphQLInputObjectType({
  name: 'UserInput',
  fields: {
    userName: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString)  }
  },
});

export {UserInputType}
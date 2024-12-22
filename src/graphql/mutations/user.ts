import { GraphQLBoolean, GraphQLID, GraphQLNonNull } from "graphql";
import { UserAppType } from "../types";
import { UserInputType } from "../input";

const createUser = {
  type: UserAppType,
  args: {
    user: { type: new GraphQLNonNull(UserInputType) }
  },
  resolve: () => {
    return {} // User
  }
};
const updateUser = {
  type: GraphQLBoolean,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    user: { type: new GraphQLNonNull(UserInputType) }
  },
  resolve: () => {
    return false // Boolean
  }
};
const deleteUser = {
  type: GraphQLBoolean,
  args: {
    id: {type: new GraphQLNonNull(GraphQLID)}
  },
  resolve: () => {
    return false // Boolean
  }
}

export {
  createUser,
  updateUser,
  deleteUser
}
import { GraphQLObjectType } from 'graphql'
import {
  createAvatar,
  updateAvatar,
  deleteAvatar,
  addElementAvatar,
  updateElementAvatar,
  deleteElementAvatar
} from './avatar'
import {
  createCategory,
  addElementToCategory,
  updateCategory,
  deleteCategory
} from './category'
import {
  createElement,
  updateElement,
  deleteElement
} from './element'
import {
  createUser,
  updateUser,
  deleteUser
} from './user'

const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {

    // Category
    createCategory,
    addElementToCategory,
    updateCategory,
    deleteCategory,

    // Element
    createElement,
    updateElement,
    deleteElement,

    // Avatar
    createAvatar,
    updateAvatar,
    deleteAvatar,
    addElementAvatar,
    updateElementAvatar,
    deleteElementAvatar,

    // User
    createUser,
    updateUser,
    deleteUser
  }
});

export default MutationType;
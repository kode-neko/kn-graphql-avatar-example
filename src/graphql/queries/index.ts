import { GraphQLObjectType } from 'graphql';
import {
  category,
  categoryList
} from './category'
import { user } from './user'

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    category,
    categoryList,
    user
  }
});

export default QueryType;
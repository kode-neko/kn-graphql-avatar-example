import { graphql } from "graphql"
import schema from './graphql'
import gql from 'graphql-tag'
import { createConnMongo } from "./data-access/mongo/utils"

createConnMongo()
  .then(() => {
    const source = gql`
      query {
        category(id: "6766a296dc3bc9c115bc5532") {
          name
          colors
        }
      }
    `;
    return graphql({
      schema,
      source: source.loc?.source.body as string
    })
  })
  .then((res) => {
    console.log(`The GraphQL implementation works!: \n${JSON.stringify(res, null, 2)}`)
  })
  .catch(err =>
    console.log(`Error in GraphQL implementation: \n${err}`)
  )



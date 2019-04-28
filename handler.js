const { ApolloServer } = require('apollo-server-lambda')
const { schema } = require('./graphql/schema')
const { resolvers } = require('./graphql/Resolvers')

const server = new ApolloServer({
  typeDefs: schema,
  resolvers
})

exports.query = server.createHandler({ cors: { origin: '*' } })

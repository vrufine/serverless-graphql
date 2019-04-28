const _ = require('lodash')

const { userResolvers } = require('./resources/users/resolvers')

const resolvers = _.merge(
  userResolvers
)

module.exports = {
  resolvers
}

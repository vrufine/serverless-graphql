const { userMutations } = require('./resources/users/schema')

const Mutation = `
  type Mutation {
    ${userMutations}
  }
`

module.exports = { Mutation }

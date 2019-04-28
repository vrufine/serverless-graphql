const { userQueries } = require('./resources/users/schema')

const Query = `
  type Query {
    ${userQueries}
  }
`

module.exports = { Query }

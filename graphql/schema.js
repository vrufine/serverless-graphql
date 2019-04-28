const { userTypes } = require('./resources/users/schema')
const { Query } = require('./Query')
const { Mutation } = require('./Mutation')

const schema = `
  ${userTypes}

  ${Query}
  ${Mutation}
`

module.exports = { schema }

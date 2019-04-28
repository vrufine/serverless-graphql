const userTypes = `
  type User {
    id: Int!
    name: String!
    createdAt: String!
  }

  input InputUser {
    name: String!
  }
`

const userQueries = `
  getUsers: [User!]!
`

const userMutations = `
  createUser(input: InputUser!): User
`

module.exports = { userTypes, userQueries, userMutations }

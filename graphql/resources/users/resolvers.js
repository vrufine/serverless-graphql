const userResolvers = {
  Query: {
    getUsers: () => [
      {
        id: 1,
        name: 'Vinicius Rufine',
        createdAt: '2019-04-10'
      },
      {
        id: 2,
        name: 'João Silva',
        createdAt: '2019-04-12'
      }
    ]
  },
  Mutation: {
    createUser: (p, { input }, c, i) => {
      return {
        id: Math.ceil(Math.random() * 100),
        name: input.name,
        createdAt: new Date().toISOString()
      }
    }
  }
}

module.exports = {
  userResolvers
}

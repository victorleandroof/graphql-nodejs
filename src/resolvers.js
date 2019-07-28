const users = [
    { id: 1 , name: "Teste 1", email: "teste1@teste.com" },
    { id: 2 , name: "Teste 2", email: "teste2@teste.com" }
]

module.exports = {
    Query: {
        users: () => users,
        user: () => users[0]
    },

    Mutation: {
        createUser: () => users[0]
    }
};
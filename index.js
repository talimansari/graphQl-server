const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./schema')
const { Query } = require('./resolvers/Query')
const { Mutation } = require('./resolvers/Mutation')
const { db } = require('./db')
const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Mutation,
    },
    context: {
        db,
    },
    graphiQl: true

});
server.listen().then(({ url }) => {
    console.log(`server run at ${url}`);
})
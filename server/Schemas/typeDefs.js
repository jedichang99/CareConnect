const { gql } = require('apollo-server-express') 

const typeDefs = gql`
    type User{
        _id: ID!
        firstName: String!
        lastName: String!
        email: String!
        helpCircle: [User]
        requests: [Request]
        offers: [Request]
    }
    type Request{
        _id: ID!
        location: String!
        type: String!
        time: String!
        date: String!
        status: String!
        owner: User
        participants: [User]
    }
    type Query {
        getAllUsers: [User]
        requests: [Request]
        user(id: ID!): User
        request(id: ID!): Request
    }
`;

module.exports = typeDefs;


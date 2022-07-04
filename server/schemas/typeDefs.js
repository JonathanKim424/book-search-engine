const { gql } = require('apollo-server-express');

const typeDefs = gql`
    input BookContent {
        authors: [String]
        description: String
        bookId: String
        image: String
        link: String
        title: String
    }
    type Book {
        authors: [String]
        description: String
        bookId: String
        image: String
        link: String
        title: String
    }
    type User {
        _id: ID
        username: String
        email: String
        password: String
        savedBooks: [Book]
    }
    type Query {
        me: User
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(content: BookContent!): User
        removeBook(bookId: String!): User
    }
    type Auth {
        token: ID!
        user: User
    }
`;

module.exports = typeDefs;
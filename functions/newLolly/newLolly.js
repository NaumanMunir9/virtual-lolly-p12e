// libraries
const { ApolloServer, gql } = require("apollo-server-lambda");
require("dotenv").config();
const shortid = require("shortid");
const faunadb = require("faunadb");
const q = faunadb.query;

const typeDefs = gql`
  type Query {
    hello: String
  }
  type Lolly {
    flavourTop: String!
    flavourMiddle: String!
    flavourBottom: String!
    recipientName: String!
    message: String!
    senderName: String!
    lollyPath: String!
  }
  type Mutation {
    createLolly(
      flavourTop: String!
      flavourMiddle: String!
      flavourBottom: String!
      recipientName: String!
      message: String!
      senderName: String!
    ): Lolly
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello, world!",
  },
  Mutation: {
    createLolly: async (_, args) => {
      const client = new faunadb.Client({
        secret: process.env.FAUNADB_SECRET_API_KEY,
      });
      const id = shortid.generate();
      args.lollyPath = id;

      const result = await client.query(
        q.Create(q.Collection("lollies"), {
          data: args,
        })
      );

      console.log(`Result: ${result.data}`);
      return result.data;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const handler = server.createHandler();

module.exports = { handler };

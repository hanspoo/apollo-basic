const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql` 
  type Book {
    title: String
    author: String
  }

  type Author {
    name: String
  }

  type Query {
    books: [Book]
    authors: [Author]
  }
`;

const books = [
    {
      title: 'Harry Potter and the Chamber of Secrets',
      author: 'J.K. Rowling',
    },
    {
      title: 'Hiperyon',
      author: 'Dan Simmonds',
    },
    {
      title: 'Jurassic Park',
      author: 'Michael Crichton',
    },
  ];

const authors = books.map(b => ({ name: b.author}));

const resolvers = {
    Query: {
      books: () => books,
      authors: () => authors
    },
  };


const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
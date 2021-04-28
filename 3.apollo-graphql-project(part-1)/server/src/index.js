const { ApolloServer, MockList } = require("apollo-server");
const typeDefs = require("./schema");

//we'll create an instance of the ApolloServer class and pass it our typeDefs in its options object:
const mocks = {
  Query: () => ({
    tracksForHome: () => new MockList([6, 9])
  }),
  Track: () => ({
    id: () => "track_01",
    title: () => "Astro Kitty, Space Explorer",
    author: () => {
      return {
        name: "Grumpy Cat",
        photo:
          "https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg",
      };
    },
    thumbnail: () =>
      "https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg",
    length: () => 1210,
    modulesCount: () => 6,
  }),
};

const server = new ApolloServer({
  typeDefs,
  mocks,
});

// Finally, to start it up, we'll call the async listen method. When it resolves, it logs a nice little message letting us know that our server is indeed up and running

server.listen().then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
  `);
});

// From the terminal, we'll launch our server with npm run start (make sure you're in the server/ folder).

//Even though our server isn't connected to any data sources yet, it would be great to be able to send the server a test query and get a valid response. Fortunately, ApolloServer provides a way to do exactly that, using mocked data. To enable basic mocked data, we could provide mocks:true to the ApolloServer constructor.This instructs Apollo Server to populate every queried schema field with a placeholder value (such as Hello World for String fields).

//However, Hello World isn't a very realistic value for the title of a track or the URL of an author's picture! To serve mocked data that's closer to reality, we'll pass an object to the mocks property instead of just true. This object contains functions that provide the mocked data we want the server to return for each queried field.

//With mocks enabled, Apollo Server always returns exactly two entries for every list field. To get more entries at a time, we can use the MockList object that we import from apollo-server. Check out the docs for more details on MockList.

//Mocklist ???
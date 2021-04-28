import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import resolvers from './resolvers'
import schema from './schema'

const app = express()

app.get("/", (req, res) => {
    res.send("Up and running with graphql crash course")
})

const root = resolvers;

//We are setting a graphql server, graphqlHTTP will govern it.
// graphiql parameters gives us a nice user interface to play with query.

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root, // ?
    graphiql: true,
  })
);

app.listen(8000, () => console.log("Port is running at port 8000"));

// Basic 3 steps: schema, resolver, root config
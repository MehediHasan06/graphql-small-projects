//We first need to install 2 packages: graphql and @apollo/client.
// graphql provides the core logic for parsing GraphQL queries.
// @apollo/client contains pretty much everything we need to build our client, including an in-memory cache, local state management, and error handling.

import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles';
import Pages from './pages';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

// ApolloClient is the class that represents Apollo Client itself. We create a new client instance like so:
//We need to provide a couple of options to the constructor. The first is the uri option, which we use to specify the location of our GraphQL server. Our server is running locally at localhost:4000
//Second, every instance of ApolloClient uses an in-memory cache. This enables it to store and reuse query results so it doesn't have to make as many network requests. This makes our app's user experience feel much snappier. We provide an InMemoryCache instance in the cache option
const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
});

// Our client is ready to use, but how do we make it available to the components in our React app? That's where ApolloProvider component comes in!
// The ApolloProvider component

// The ApolloProvider component uses React's Context API to make a configured Apollo Client instance available throughout a React component tree. To use it, we wrap our app's top-level components in the ApolloProvider component and pass it our client instance as a prop:

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyles />
    <Pages />
  </ApolloProvider>,
  document.getElementById('root')
);

// Now all of our pages, containers, and components can access the client via friendly React Hooks thanks to the context API.


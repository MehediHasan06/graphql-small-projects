// The useQuery React hook is the primary API for executing queries in an Apollo application. We run a query within a React component by calling useQuery and passing it our GraphQL query string. This makes running queries from React components a breeze.

// When our component renders, useQuery returns an object from Apollo Client that contains loading, error, and data properties that we can use to render our UI. Let's put all of that into code.

import React from "react";
import { Layout } from "../components";
import { useQuery, gql } from "@apollo/client";
import TrackCard from "../containers/track-card";
import QueryResult from "../components/query-result";

// we'll declare a constant called TRACKS with an empty GraphQL string (by convention, query constants are in ALL_CAPS):
export const TRACKS = gql`
  # Query goes here
  query GetTracks {
    tracksForHome {
      id
      title
      author {
        id
        name
        photo
      }
      thumbnail
      length
      modulesCount
    }
  }
`;

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);

  return (
    <Layout grid>
      <QueryResult error={error} loading={loading} data={data}>
        {data?.tracksForHome?.map((track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </QueryResult>
    </Layout>
  );
};

export default Tracks;

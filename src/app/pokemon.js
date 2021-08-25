import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { request, gql, ClientError } from "graphql-request";

const graphqlBaseQuery =
  ({ baseUrl }) =>
  async ({ body }) => {
    try {
      const result = await request(baseUrl, body);
      return { data: result };
    } catch (error) {
      if (error instanceof ClientError) {
        return { error: { status: error.response.status, data: error } };
      }
      return { error: { status: 500, data: error } };
    }
  };

// Storing Pokemon Data into Redux
export const pokemonApi = createApi({
  baseQuery: graphqlBaseQuery({
    baseUrl: "http://localhost:8000/___graphql/",
  }),
  endpoints: (builder) => ({
    getAllPokemon: builder.query({
      query: () => ({
        body: gql`
          query {
            allPokemon {
              nodes {
                id
                name
                stats {
                  base_stat
                  stat {
                    name
                  }
                }
                abilities {
                  ability {
                    name
                  }
                }
                types {
                  type {
                    name
                  }
                }
                sprites {
                  other {
                    official_artwork {
                      front_default
                    }
                  }
                }
              }
            }
          }
        `,
      }),
    }),
  }),
});

export const { useGetAllPokemonQuery } = pokemonApi;

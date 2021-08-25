const fetch = require("node-fetch");
const path = require("path");
const NODE_TYPE = "Pokemon";


exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions;

  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");

  const json = await response.json();

  const { results = [] } = json;

  const pokemon = await Promise.all(
    results.map(async (result) => {
      const { url } = result;
      const pokeResponse = await fetch(url);
      return await pokeResponse.json();
    })
  );

  pokemon.forEach((node, index) => {
    createNode({
      ...node,
      id: createNodeId(`${NODE_TYPE}-${node.id}`),
      parent: null,
      children: [],
      internal: {
        type: NODE_TYPE,
        content: JSON.stringify(node),
        contentDigest: createContentDigest(node),
      },
    });
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const pokemonTemplate = path.resolve(`src/templates/pokemon.js`);
  const result = await graphql(`
    query loadPokemonQuery {
      allPokemon {
        edges {
          node {
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
    }
  `);
  result.data.allPokemon.edges.forEach((edge) => {
    createPage({
      path: `pokemon/${edge.node.name}`,
      component: pokemonTemplate,
      context: {
        name: edge.node.name,
        id: edge.node.id,
      },
    });
  });
};

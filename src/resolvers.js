/* When the queries and mutations in the root types are executed, GraphQL expects their respective resolver
 * functions to fetch and return data corresponding with the schema return type */

const resolvers = {
    Query: {
        getMovies: async (_, _args, { dataSources: { movies } }) => {
            return movies.getMovies();
        },
        getMovie: async (_, { id }, { dataSources: { movies } }) => {
            return movies.getMovie( id );
        }
    },
    Mutation: {
        createMovie: async (_, { title, rating, year }, { dataSources: { movies } }) => {
            return movies.createMovie( { title, rating, year } );
        }
    }
}

export { resolvers };

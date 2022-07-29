/* When the queries and mutations in the root types are executed, GraphQL expects their respective resolver
* functions to fetch and return data corresponding with the schema return type */

const movies = [{
    _id: "12345",
    title: "Sinder Twindler",
    year: 2022,
    rating: 6.5,
}];

const resolvers = {
    Query: {
        getMovies: () => movies,
        getMovie: (_parent, {id}) => {
            return movies.find(movie => movie._id === id);
        }
    },
    Mutation: {
        createMovie: (_parent, {title, rating, year}) => {
            const newMovie = {
                _id: Math.random().toString().split('.')[1],
                title,
                rating,
                year
            };
            movies.push(newMovie);
            return newMovie;
        }
    }
}

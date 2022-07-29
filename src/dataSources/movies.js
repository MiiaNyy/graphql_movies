import { MongoDataSource } from "apollo-datasource-mongodb";

class Movies extends MongoDataSource {
    constructor () {
        super( 'Movie' );
    }
    async getMovies () {
        return this.model.find();
    }
    
    async getMovie (id) {
        return this.findById( id )
    }
    
    async createMovie ({ title, rating, year }) {
        return this.model.create( { title, rating, year } );
    }
}

export default Movies;

import mongoose from "mongoose";

// This is Movie model. It serves as the interface for creating and manipulating documents in the MongoDB database.
const Movie = mongoose.model( "Movie", {
    title: String,
    rating: Number,
    year: Number
} );

export { Movie };

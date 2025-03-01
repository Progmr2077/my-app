import { connectToDatabase } from '../../lib/mongodb';

export default async function handler(req, res) {
  try {
    // Connect to MongoDB
    const { db } = await connectToDatabase();

    // Fetch all movies from the "movies" collection
    const movies = await db.collection('movies').find({}).toArray();

    // Convert ObjectId to string (required for JSON serialization)
    const serializedMovies = movies.map((movie) => ({
      ...movie,
      _id: movie._id.toString(),
    }));

    // Send the movies as a response
    res.status(200).json(serializedMovies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch movies' });
  }
}
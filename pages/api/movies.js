import { MongoClient } from "mongodb";

export default async function handler(req, res) {
    const uri = process.env.MONGODB_URI;
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const db = client.db("sample_mflix"); // Change this to your actual database name
        const movies = await db.collection("movies").find({}).limit(10).toArray();
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch movies" });
    } finally {
        await client.close();
    }
}
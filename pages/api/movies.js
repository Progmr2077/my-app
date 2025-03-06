import { MongoClient, ObjectId } from "mongodb";

export default async function handler(req, res) {
    const uri = process.env.MONGODB_URI;
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const db = client.db("sample_mflix"); // Change this to your actual database name

        const page = parseInt(req.query.page) || 1;
        const perPage = parseInt(req.query.perPage) || 10;
        const skip = (page - 1) * perPage;

        if (req.query.id) {
            const movie = await db.collection("movies").findOne({ _id: new ObjectId(req.query.id) });
            res.status(200).json(movie);
        } else {
            const movies = await db.collection("movies").find({}).skip(skip).limit(perPage).toArray();
            res.status(200).json(movies);
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch movies" });
    } finally {
        await client.close();
    }
}
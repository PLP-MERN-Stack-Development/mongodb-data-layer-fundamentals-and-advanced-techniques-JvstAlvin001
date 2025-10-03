// aggregation.js
const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db("library");
    const books = db.collection("books");

    const pipeline = [
      { $group: { _id: "$author", totalBooks: { $sum: 1 } } },
      { $sort: { totalBooks: -1 } }
    ];

    const result = await books.aggregate(pipeline).toArray();
    console.log("Books per author:", result);

  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

run();

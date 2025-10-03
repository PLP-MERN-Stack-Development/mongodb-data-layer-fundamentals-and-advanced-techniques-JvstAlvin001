// indexing.js
const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db("library");
    const books = db.collection("books");

    const indexName = await books.createIndex({ author: 1 });
    console.log("✅ Index created:", indexName);

  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

run();

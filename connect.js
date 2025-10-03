// connect.js
const { MongoClient } = require("mongodb");

// local connection string (if using local MongoDB)
const uri = "mongodb://127.0.0.1:27017";

// create client
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");

    const db = client.db("library"); // your database
    const books = db.collection("books"); // your collection

    // Just to test, count documents
    const count = await books.countDocuments();
    console.log(`📚 Found ${count} book(s) in the collection`);

  } catch (err) {
    console.error("Error:", err);
  } finally {
    await client.close();
  }
}

run();

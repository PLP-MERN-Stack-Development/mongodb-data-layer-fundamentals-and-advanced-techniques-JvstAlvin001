// queries.js
const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db("library");
    const books = db.collection("books");

    const authorBooks = await books.find({ author: "J.K. Rowling" }).toArray();
    console.log("Books by J.K. Rowling:", authorBooks);

    const recentBooks = await books.find({ year: { $gte: 2015 } }).toArray();
    console.log("Books published after 2015:", recentBooks);

  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

run();

// crud.js
const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db("library");
    const books = db.collection("books");

    // 1️⃣ CREATE
    const newBook = { title: "Red Hat", author: "Alvin", year: 2025 };
    await books.insertOne(newBook);
    console.log("✅ Inserted a new book");

    // 2️⃣ READ
    const allBooks = await books.find().toArray();
    console.log("📚 All books:", allBooks);

    // 3️⃣ UPDATE
    await books.updateOne(
      { title: "Red Hat" },
      { $set: { author: "Alvin Macharia" } }
    );
    console.log("✏️ Updated the book");

    // 4️⃣ DELETE
    await books.deleteOne({ title: "Red Hat" });
    console.log("🗑️ Deleted the book");

  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

run();


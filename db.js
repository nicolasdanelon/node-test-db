const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("data.db", (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("Connected to the database.");
    db.run(`
      CREATE TABLE IF NOT EXISTS people (
        id INTEGER PRIMARY KEY,
        name TEXT,
        age INTEGER
      )
    `);
  }
});

module.exports = db;

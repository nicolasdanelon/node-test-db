const db = require("../helpers/db");

const addPeople = (req, res) => {
  const name = req.body.name;
  const age = req.body.age;

  db.run(
    `
    INSERT INTO people (name, age)
    VALUES (?, ?)
  `,
    [name, age],
    (err) => {
      if (err) {
        console.error(err.message);
        res.status(500).json({ error: "Failed to insert data into database." });
      } else {
        res.status(201).json({ message: "Data inserted successfully." });
      }
    }
  );
};

module.exports = addPeople;

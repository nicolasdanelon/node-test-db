const db = require("./db");

const updatePeople = (req, res) => {
  const id = req.params.id;

  const { name, age } = req.body;

  const sql = "UPDATE people SET name = ?, age = ? WHERE id = ?";

  db.run(sql, [name, age, id], function (err) {
    if (err) {
      console.error(err);
      res.status(500).send({ error: "Internal Server Error" });
      return;
    }

    res.status(201).json({ message: "Data updated successfully." });
  });
};

module.exports = updatePeople;

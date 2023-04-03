const db = require("./db");

const deletePeople = (req, res) => {
  const id = req.params.id;

  const sql = "DELETE FROM people WHERE id = ?";

  db.run(sql, id, function (err) {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }

    res.status(201).json({ message: "Data deleted successfully." });
  });
};

module.exports = deletePeople;

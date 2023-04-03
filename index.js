const express = require("express");
const home = require("./home");
const addPeople = require("./add-people");
const listPeople = require("./list-people");
const deletePeople = require("./delete-people");
const updatePeople = require("./update-people");

const app = express();

app.use(express.json());

// API
app.get("/", home);
app.post("/people", addPeople);
app.get("/people", listPeople);
app.delete("/people/:id", deletePeople);
app.put("/people/:id", updatePeople); // put o patch

// CRUD = Create Read Update Delete
// ABM  = Alta Baja Modificacion

app.listen(3000, () => {
  console.log("Server listening on http://localhost:3000");
});

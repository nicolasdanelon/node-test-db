const express = require("express");
const home = require("./handlers/home");
const addPeople = require("./handlers/add-people");
const listPeople = require("./handlers/list-people");
const deletePeople = require("./handlers/delete-people");
const updatePeople = require("./handlers/update-people");

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

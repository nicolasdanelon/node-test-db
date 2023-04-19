import express from "express";
import session from "express-session";
import home from "./handlers/home.js";
// const home = require("./handlers/home");
import login from "./handlers/login.js"
import loginPost from "./handlers/login-post.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("static"));
app.use(session({
  secret: '23990b1affd2dc8f5e59048d4d4bef05f6e1c544',
  resave: false,
  saveUninitialized: true,
  // cookie: { secure: true } // https
}))

app.get("/", home);
app.get('/login', login);
app.post('/login', loginPost);
app.get('/dashboard', (req, res) => {
  if (req.session.loggedIn) {
    return res.send(`Hola ${request.session.username}, como estas?`)
  } else {
    return res.send('Tenes que entrar!');
  }
})

app.listen(3000, () => {
  console.log("Server listening on http://localhost:3000");
});

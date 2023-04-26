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
  resave: true,
  saveUninitialized: true,
  // cookie: { secure: true } // https
  cookie: {
    maxAge: 60 * 60 * 1000, // 1 hora en milisegundos
  },
}));

app.get("/", home);
app.get('/login', login);
app.post('/login', loginPost);
app.get('/dashboard', (req, res) => {
  if (req.session.loggedIn) {
    return res.send(`Hola "${req.session.username}", como estas?`);
  } else {
    return res.send('Tenes que entrar!');
  }
});

app.get('/logout', (req, res) => {
  req.session.username = undefined;
  req.session.loggedIn = false;
  res.redirect('/');
});

app.listen(3001, () => {
  console.log("Server listening on http://localhost:3000");
});

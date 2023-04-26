import db from "../helpers/db.js";
import { compareSync } from 'bcrypt';

const loginPost = (request, response) => {
  const username = request.body.username;
  const password = request.body.password;

  if (username.length > 0 && password.length > 0) {
    const sql = "SELECT * FROM users WHERE username = ?";

    db.all(sql, [username], (err, rows) => {
      if (err) {
        console.error(err);
        response.status(500).send("Internal Server Error");
        return;
      }

      if (rows.length > 0 && compareSync(password, rows[0].password)) {
        request.session.loggedIn = true;
        request.session.username = username;
        response.redirect('/dashboard');
      } else {
        response.send('datos incorrectos');
      }
      response.end();
    });
  } else {
    response.status(401).send('Inrese usuario y contranseña');
    response.end();
  }
}

export default loginPost;

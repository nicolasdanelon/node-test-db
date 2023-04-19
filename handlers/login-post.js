import db from "../helpers/db.js";

const loginPost = (request, response) => {
  const username = request.body.username;
  const password = request.body.password;

  if (username.length > 0 && password.length > 0) {
    const sql = "SELECT * FROM users WHERE username = ? and password = ?";

    db.all(sql, [username, password], (err, rows) => {
      if (err) {
        console.error(err);
        response.status(500).send("Internal Server Error");
        return;
      }

      if (rows.length > 0) {
        request.session.loggedIn = true;
        request.session.username = username;
        response.redirect('/dashboard');
      } else {
        response.send('datos incorrectos');
      }
      response.end();
    });
  } else {
    response.send('Inrese usuario y contranseña');
    response.end();
  }
}

export default loginPost;

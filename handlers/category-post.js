import db from "../helpers/db.js";

// req = request  | pedido
// res = response | respuesta
const categoryPost = (req, res) => {
  const categoryName = req.body.categoryName;

  console.log(categoryName)

  if (categoryName.length > 0) {
    const sql = "INSERT INTO categories(name, created_at) VALUES(?, ?);";

    const timestamp = new Date().getTime();

    db.all(sql, [categoryName, timestamp], (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
        return;
      }

      console.log('rows: ', rows);

      if (rows.length === 0) {
        res.status(201).send('caategoria creada');
      } else {
        res.status(400).send('hubo un error al crear la categoria');
      }
      res.end();
    });

  } else {
    res.status(400).send('No se pudo crear la categoria, falto el nombre');
    res.end();
  }
}

export default categoryPost;

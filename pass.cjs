const bcrypt = require("bcrypt");

const salt = bcrypt.genSaltSync(5);
const password = "nicolasm";

// jamas guardar la contraseña en modo text, 
// siempre se guarda hasheada
const hash = bcrypt.hashSync(password, salt);

if (bcrypt.compareSync(password, hash)) {
  console.log("ok");
} else {
  console.log("error");
}

console.log({ hash });

// filter filtra un array
// filter modifica el array

const countries = [
  'Argentina',
  'Bolivia',
  'Brasil',
  'Chile',
  'Perú'
];

const paisesFiltrados = countries.filter((pais, indice) => {
  if (indice % 2 == 0) {
    return true;
  }
});

console.log(paisesFiltrados);

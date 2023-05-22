// map recorre un array
// map devuelve un array

const countries = [
  'Argentina',
  'Bolivia',
  'Brasil',
  'Chile',
  'Perú'
];

const paises = countries.map((pais, indice) => {
  // console.log(`Pais N: ${indice}, nombre: ${pais}`);
});

const paisesFiltrados = countries.map((pais, indice) => {
  if (indice % 2) {
    return `Pais N: ${indice}, nombre: ${pais}`;
  } else {
    return 'tu vieja'
  }
});

console.log(paisesFiltrados);

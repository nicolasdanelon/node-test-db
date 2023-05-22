let duplicados = [1, 2, 3, 'a', 'b', 'c', 1, 2, 4, 5, 5, 6, 'a', 'b', 'e'];

let sinDuplicados = duplicados.reduce((noDupli, arrayItem) => {
  if (noDupli.indexOf(arrayItem) === -1) {
    noDupli.push(arrayItem)
  }
  return noDupli;
}, []);

console.log(sinDuplicados);

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((sum, number) => {
  const updatedSum = sum + number;
  return updatedSum;
}, 0);

console.log(sum);

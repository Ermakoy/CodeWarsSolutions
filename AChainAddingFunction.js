// https://www.codewars.com/kata/a-chain-adding-function
function add(n) {
  let sum = n;

  const addSum = num => {
    sum += num;
    return addSum;
  };
  addSum.valueOf = () => sum;
  return addSum;
}

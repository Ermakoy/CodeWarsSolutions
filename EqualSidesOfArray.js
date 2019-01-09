// https://www.codewars.com/kata/equal-sides-of-an-array
function findEvenIndex(arr) {
  let sum = arr.reduce((acc, val) => acc + val , 0),
    leftSum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum -= arr[i];

    if (leftSum === sum) {
      return i;
    }

    leftSum += arr[i];
  }

  return -1;
}

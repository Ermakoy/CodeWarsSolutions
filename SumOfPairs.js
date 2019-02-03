// https://www.codewars.com/kata/54d81488b981293527000c8f
function sum_pairs(integers, sum) {
  const seenNumbers = new Set();
  for (const val of integers) {
    if (seenNumbers.has(sum - val)) return [sum - val, val];

    seenNumbers.add(val);
  }
}

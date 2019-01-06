// https://www.codewars.com/kata/529adbf7533b761c560004e5
const fibonacci = (() => {
  const memo = [0,1];
  const fib = n => typeof memo[n] === 'number' ? memo[n] : (memo[n] = fib(n-1) + fib(n-2),memo[n]);
  return fib;
})();

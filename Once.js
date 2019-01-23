// https://www.codewars.com/kata/once

function once(fn) {
  let wasCalled = false;
  return (...args) =>
    wasCalled ? undefined : ((wasCalled = true), fn(...args));
}

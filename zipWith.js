// https://www.codewars.com/kata/zipwith
const zipWith = (fn, a0, a1) =>
  Array.from({ length: Math.min(a0.length, a1.length) }, (value, i) =>
    fn(a0[i], a1[i])
  );

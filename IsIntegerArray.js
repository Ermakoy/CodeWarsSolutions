// https://www.codewars.com/kata/is-integer-array
const isIntArray = arr => !!arr && (!arr.length || arr.every(Number.isInteger));

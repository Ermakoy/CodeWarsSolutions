// https://www.codewars.com/kata/deep-comparison-of-objects
function deepCompare(o1, o2) {
  if (isObject(o1) && isObject(o2)) {
    let keys1 = Object.keys(o1);
    let keys2 = Object.keys(o2);
    if (keys1.length !== keys2.length) return false;

    return keys1.every(key => deepCompare(o1[key], o2[key]));
  }
  return o1 === o2;
}

const isObject = val => val !== null && typeof val === 'object';

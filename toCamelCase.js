// https://www.codewars.com/kata/convert-string-to-camel-case
const toCamelCase = str => 
  ([first, ...rest] = str.split(/[-_]/)),
  (
    first +
    rest.reduce((acc, word) => acc + word[0].toUpperCase() + word.slice(1), '')
  );
}

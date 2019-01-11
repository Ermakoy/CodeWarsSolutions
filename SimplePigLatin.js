// https://www.codewars.com/kata/simple-pig-latin
const pigIt = str =>
  str
    .trim()
    .split(/\s{1,}/)
    .map(val =>
      /^[A-Za-z]+$/.test(val) ? `${val.slice(1)}${val.slice(0, 1)}ay` : val
    )
    .join(" ");

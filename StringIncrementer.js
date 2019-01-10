// https://www.codewars.com/kata/string-incrementer
const incrementString = input => input.replace(/([0-8]?)(9*)$/, (s, d, ns) => +d + 1 + ns.replace(/9/g, '0'))


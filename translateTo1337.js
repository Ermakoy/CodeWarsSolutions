// https://www.codewars.com/kata/translate-to-1337
const dictionary = {
  a: ['4', '@'],
  b: ['|3', '8'],
  d: ['|)', 'o|'],
  e: ['3'],
  f: ['|='],
  g: ['9', '6'],
  h: ['|-|', ']-[', '}-{', '(-)', ')-(', '#'],
  i: ['1', '!', ']['],
  j: ['_|'],
  k: ['|<', '|{'],
  l: ['|_'],
  n: ['|\\|'],
  o: ['0'],
  p: ['|2', '|D'],
  q: ['(,)'],
  r: ['|Z', '|?'],
  s: ['5', '$'],
  t: ['+', '7'],
  v: ['|/', '\\/'],
  w: ['\\^/', '//'],
  x: ['><', '}{'],
  y: ['`/'],
  z: ['(\\)']
};

function toLeet(str) {
  const wasUsedTimes = {};

  return str
    .split('')
    .map(char => {
      const values = dictionary[char];
      if (!values) return char;

      return values[
        ((!wasUsedTimes[char]
          ? (wasUsedTimes[char] = 1)
          : ++wasUsedTimes[char]) -
          1) %
          values.length
      ];
    })
    .join('');
}

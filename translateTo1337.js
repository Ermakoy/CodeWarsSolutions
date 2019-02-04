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
  v: ['|/', '/'],
  w: ['\\^/', '//'],
  x: ['><', '}{'],
  y: ['`/'],
  z: ['()']
};

function toLeet(str) {
  const wasUsedTimes = {};

  return str
    .split('')
    .map(char => {
      const values = dictionary[char];
      if (!values) return char;

      const position =
        char in wasUsedTimes
          ? ((wasUsedTimes[char] = 0), wasUsedTimes[char])
          : ++wasUsedTimes[char];

      return values[position % values.length];
    })
    .join('');
}

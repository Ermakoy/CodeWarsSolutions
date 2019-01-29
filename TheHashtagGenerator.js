// https://www.codewars.com/kata/the-hashtag-generator
const generateHashtag = str => (
  (isEmptyString = !str.trim()),
  (words = str
    .trim()
    .split(' ')
    .filter(Boolean)),
  (isValidHashtag = !(isEmptyString || words.join('').length > 140)),
  isValidHashtag ||
    '#'.concat(
      words.map(word => word[0].toUpperCase() + word.slice(1)).join('')
    )
);

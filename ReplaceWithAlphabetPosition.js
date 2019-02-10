// https://www.codewars.com/kata/replace-with-alphabet-position
const alphabetPosition = text =>
    text
        .replace(/[^a-z]/gi, '')
        .split('')
        .map(letter => letter.toUpperCase().charCodeAt(0) - 64)
        .join(' ')
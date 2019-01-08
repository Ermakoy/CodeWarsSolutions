// https://www.codewars.com/kata/did-you-mean-dot-dot-dot

function Dictionary(words) {
  this.words = words;
}

function levenshteinDistance(a, b) {
  if (!a.length) return b.length;
  if (!b.length) return a.length;

  const matrix = [];

  // increment along the first column of each row
  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  // increment each column in the first row
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  // Fill in the rest of the matrix
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          Math.min(
            matrix[i][j - 1] + 1, // insertion
            matrix[i - 1][j] + 1
          )
        ); // deletion
      }
    }
  }

  return matrix[b.length][a.length];
}

Dictionary.prototype.findMostSimilar = function(term) {
  return this.words.reduce(
    (res, word) => {
      const currentSimilarity = levenshteinDistance(term, word);

      return currentSimilarity < res.similarity
        ? {similarity: currentSimilarity, word}
        : res;
    },
    {
      similarity: Number.POSITIVE_INFINITY,
      word: ''
    }
  ).word;
};

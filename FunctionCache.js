// https://www.codewars.com/kata/function-cache

function cache(func){
  const cache = {};

  return (...args) => {
    const cacheKey = JSON.stringify(args);

    if (!(cacheKey in cache)) {
      cache[cacheKey] = func.apply(null, args);
    }
    return cache[cacheKey];
  }
}

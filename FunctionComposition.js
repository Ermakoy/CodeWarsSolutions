// https://www.codewars.com/kata/5421c6a2dda52688f6000af8/

const compose = (f,g) => (...args) => f(g.apply(null, args))

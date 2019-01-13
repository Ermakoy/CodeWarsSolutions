// https://www.codewars.com/kata/dependency-injection
/**
 * Constructor DependencyInjector
 * @param {Object} - object with dependencies
 */
function DI(dependency) {
  this.dependency = dependency;
}

// Should return new function with resolved dependencies
DI.prototype.inject = function(func) {
  let methods = func.toString().match(/function\s?\((.+)\)\s?{/);
  methods = methods && methods[1].split(',').map(i => i.replace(/\s+/, ''));

  return () =>
    func.apply(
      func,
      methods
        ? methods.reduce(
          (acc, nexFunc) => [...acc, this.dependency[nexFunc]],
          []
        )
        : []
    );
};

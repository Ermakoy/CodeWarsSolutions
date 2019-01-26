function chainFunctions(fns) {
  for (let [name, fn] of Object.entries(fns)) {
    Object.defineProperty(this, name, {
      value: (...inputs) => {
        this.result != null && inputs.unshift(this.result);

        let cloneCF = new chainFunctions(fns);
        cloneCF.result = fn.apply(this, inputs);
        return cloneCF;
      }
    });
  }
}
chainFunctions.prototype.execute = function() {
  return this.result;
};

function chain(fns) {
  return new chainFunctions(fns);
}

// https://www.codewars.com/kata/i-spy
function spyOn(func) {
  const wasCalledWith = new Set();
  const returned = new Set();
  let callCount = 0;

  function wrappedFunction(...args) {
    callCount++;
    args.forEach(wasCalledWith.add.bind(wasCalledWith));
    const result = func.apply(this, args);
    returned.add(result);

    return result;
  }
  wrappedFunction.callCount = () => callCount;
  wrappedFunction.returned = returned.has.bind(returned);
  wrappedFunction.wasCalledWith = wasCalledWith.has.bind(wasCalledWith);

  return wrappedFunction;
}

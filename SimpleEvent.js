// https://www.codewars.com/kata/simple-events
function Event() {
  this.handlers = [];
  this.subscribe = func => this.handlers.push(func);
  this.emit = (...args) =>
    this.handlers.forEach(handler => handler.apply(null, args));
  this.unsubscribe = func =>
    (this.handlers = this.handlers.filter(handler => handler !== func));
}

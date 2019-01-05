// https://www.codewars.com/kata/calculating-with-functions

const zero = func => func ? func(0) : 0;
const one = func => func ? func(1) : 1;
const two = func => func ? func(2) : 2;
const three = func => func ? func(3) : 3;
const four = func => func ? func(4) : 4;
const five = func => func ? func(5) : 5;
const six = func => func ? func(6) : 6;
const seven = func => func ? func(7) : 7;
const eight = func => func ? func(8) : 8;
const nine = func => func ? func(9) : 9;

const plus = val => plusVal => val + plusVal;
const minus = val => minusVal => minusVal - val;
const times = val => timesVal => val * timesVal;
const dividedBy = val => dividevVal => Math.floor(dividevVal/val);

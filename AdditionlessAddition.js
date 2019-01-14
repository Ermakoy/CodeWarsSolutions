// http://www.codewars.com/kata/additionless-addition
// Hint: https://prismoskills.appspot.com/lessons/Bitwise_Operators/Sum_using_only_bitwise_ops.jsp

const add = (x, y) => !x ? y : add((x & y) << 1, x ^ y);

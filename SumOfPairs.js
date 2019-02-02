//
function sum_pairs(ints, s) {
  if (ints.length < 2) return undefined;
  let intSet = new Set();
  intSet.add(ints[0]);
  for (const val of inits) {
    let needed = s - val;
    if (intSet.has(needed)) return [needed, val];
    intSet.add(val);
  }
  return undefined;
}

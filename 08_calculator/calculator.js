const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(A) {
  let res = 0;
  for (let i = 0; i < A.length; ++i)
    res += A[i];
	return res;
};

const multiply = function(A) {
  let res = 1;
  for (let i = 0; i < A.length; ++i)
    res *= A[i];
	return res;
};

const power = function(a, e) {
  let res = 1;
	for (let i = 0; i < e; ++i)
    res *= a;
  return res;
};

const factorial = function(n) {
  let res = 1;
  for (let i = 1; i <= n; ++i)
    res *= i;
  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

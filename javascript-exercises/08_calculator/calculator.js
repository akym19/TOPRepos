const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(array) {
  let sum = 0;
  for (let item of array){
    sum += item;
  }
  return sum;
};

const multiply = function(array) {
  let product = 1;
  for (let item of array){
    product *= item;
  }
  return product;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
  if (num === 0) return 1;
  let prod = 1;
  for (let i = num; i > 0; i--){
    prod *= i;
  }
  return prod;
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

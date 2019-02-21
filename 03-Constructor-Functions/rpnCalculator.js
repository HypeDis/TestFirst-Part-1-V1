function RPNCalculator() {
  this.currentValue = 0;
  this.stack = [];
}

RPNCalculator.prototype.plus = function() {
  const num2 = this.stack.pop();
  const num1 = this.stack.pop();
  const sum = num1 + num2;

  if (!sum) {
    throw 'rpnCalculatorInstance is empty';
  }

  this.currentValue = sum;
  this.push(sum);
};

RPNCalculator.prototype.minus = function() {
  const num2 = this.stack.pop();
  const num1 = this.stack.pop();
  const diff = num1 - num2;

  if (!diff) {
    throw 'rpnCalculatorInstance is empty';
  }

  this.currentValue = diff;

  this.push(diff);
};

RPNCalculator.prototype.times = function() {
  const num2 = this.stack.pop();
  const num1 = this.stack.pop();
  const product = num1 * num2;

  if (!product) {
    throw 'rpnCalculatorInstance is empty';
  }

  this.currentValue = product;

  this.push(product);
};

RPNCalculator.prototype.divide = function() {
  const num2 = this.stack.pop();
  const num1 = this.stack.pop();
  const quotient = num1 / num2;

  if (!quotient) {
    throw 'rpnCalculatorInstance is empty';
  }

  this.currentValue = quotient;

  this.push(quotient);
};

RPNCalculator.prototype.value = function() {
  if (!this.currentValue) {
    throw 'rpnCalculatorInstance is empty';
  }
  return this.currentValue;
};

RPNCalculator.prototype.push = function(num) {
  this.stack.push(num);
};

function createCalculator() {
  return {
    currentValue: 0,
    value: function() {
      return this.currentValue;
    },
    add: function(num) {
      this.currentValue += num;
    },
    subtract: function(num) {
      this.currentValue -= num;
    },
    clear: function() {
      this.currentValue = 0;
    }
  };
}

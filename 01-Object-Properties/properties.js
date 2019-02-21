function setPropsOnObj(obj) {
  obj.x = 7;
  obj.y = 8;
  obj.onePlus = function(num) {
    return num + 1;
  };
}

function setPropsOnArr(arr) {
  arr.hello = function() {
    return 'Hello!';
  };

  arr.full = 'stack';

  arr[0] = 5;

  arr.twoTimes = function(num) {
    return num * 2;
  };
}

function setPropsOnFunc(functionObj) {
  functionObj.year = '20??';

  functionObj.divideByTwo = function(num) {
    return num / 2;
  };

  functionObj.prototype.helloWorld = function() {
    return 'Hello World';
  };
}

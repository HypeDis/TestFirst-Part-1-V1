function repeat(str, num) {
  let repeatedStr = '';
  for (let i = 0; i < num; i++) {
    repeatedStr += str;
  }
  return repeatedStr;
}

function sum(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

function join(arr, delimiter) {
  let joinedStr = '';
  for (let i = 0; i < arr.length; i++) {
    joinedStr += arr[i];
    if (delimiter && i < arr.length - 1) {
      joinedStr += delimiter;
    }
  }
  return joinedStr;
}

function gridGenerator(rowCol) {
  let grid = '';
  const pound = '#';
  const space = ' ';
  let isPound = true;

  for (let i = 1; i <= rowCol; i++) {
    // odd rows start with a pound, even rows start with a space
    if (i % 2 !== 0) {
      isPound = true;
    } else {
      isPound = false;
    }
    for (let j = 1; j <= rowCol; j++) {
      if (isPound) {
        grid += pound;
        isPound = false;
      } else if (!isPound) {
        grid += space;
        isPound = true;
      }
      // insert new line at end of row
      if (j === rowCol) {
        grid += '\n';
      }
    }
  }
  return grid;
}

function paramify(obj) {
  const keys = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      keys.push(key);
    }
  }
  let objArr = [];
  keys.forEach(key => objArr.push(`${key}=${obj[key]}`));
  objArr.sort((a, b) => (a < b ? -1 : 1));
  return objArr.join('&');
}

function paramifyObjectKeys(obj) {
  const keys = Object.keys(obj);
  let objArr = [];
  keys.forEach(key => objArr.push(`${key}=${obj[key]}`));
  objArr.sort((a, b) => (a < b ? -1 : 1));
  return objArr.join('&');
}

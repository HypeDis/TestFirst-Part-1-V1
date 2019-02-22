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

/* 
** code works but doesnt output in the expected order for tests to pass
function renameFiles(files) {
  filesObj = {};
  let newFiles = [];
  files.forEach(file => {
    if (filesObj[file]) {
      filesObj[file]++;
    } else {
      filesObj[file] = 1;
    }
  });
  for (let file in filesObj) {
    let n = 1;
    let newFile = getNewFileName(file, n);
    for (let i = 0; i < filesObj[file]; i++) {
      debugger;
      if (i === 0) {
        newFiles.push(file);
      } else {
        while (filesObj[newFile] || newFiles.indexOf(newFile) > -1) {
          n += 1;
          newFile = getNewFileName(file, n);
        }
        newFiles.push(newFile);
      }
    }
  }
  console.log(newFiles.indexOf('a(2)'));
  return newFiles;
} */

// accepted solution, will output incorrect naming if the order of the input array is varied.
// example:
// files = [a, a, a(1)] => [ 'a', 'a(1)', 'a(1)(1)' ]
function renameFiles(files) {
  const newFiles = [];
  for (let i = 0; i < files.length; i++) {
    debugger;
    if (newFiles.indexOf(files[i]) < 0) {
      newFiles.push(files[i]);
    } else {
      let n = 1;
      let newFile = getNewFileName(files[i], n);
      while (newFiles.indexOf(newFile) > -1) {
        n += 1;
        newFile = getNewFileName(files[i], n);
      }
      newFiles.push(newFile);
    }
  }
  return newFiles;
}

const getNewFileName = (file, n) => {
  return `${file}(${n})`;
};

console.log(renameFiles(['a', 'a', 'a(1)']));

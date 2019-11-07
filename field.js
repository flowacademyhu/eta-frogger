const chalk = require('chalk');
const colors = require('colors');
const readLine = require('readline');
const test = require('./test.js');
const cord = test.cord;
const beeper = require('beeper');
(async => {
   beeper();
   beeper(1);
   
})();

const matrixGenerator = (row, col, filler) => {
  const matrix = [];
  for (let i = 0; i < row; i++) {
    matrix[i] = [];
    for (let j = 0; j < col; j++) {
      matrix[i][j] = filler;
    }
  }
  return matrix;
};

const frogCoordinator = (row, col) => {
  const cord = {
    row: row,
    col: col
  };
  return cord;
};

const finishMaker = (matrix) => {
  matrix[0][9] = 'F';
  matrix[0][17] = 'L';
  matrix[0][25] = 'O';
  matrix[0][33] = 'W';
  return matrix;
};

const frogLeft = (obj) => {
  obj.col--;
};
const frogRight = (obj) => {
  obj.col++;
};
const frogUp = (obj) => {
  obj.row--;
};
const frogDown = (obj) => {
  obj.row++;
};

const westBorder = (obj) => {
  if (obj.col > 4) return true;
   return false;
  };
const eastBorder = (obj) => {
  if (obj.col < 40) return true;
  return false;
};
const southBorder = (obj) => {
  if (obj.row < 19) return true;
  return false;
  
};
const northBorder = (obj, f, l, o, w) => {
  if (obj.row > 1 ||
  (obj.row === 1 && obj.col === 9 && f) ||
  (obj.row === 1 && obj.col === 17 && l) ||
  (obj.row === 1 && obj.col === 25 && o) ||
  (obj.row === 1 && obj.col === 33 && w)) {
    return true;
  }
};

const layer = (matr, obj, f, l, o, w) => {
  let character = '';
  for (let row = 0; row < matr.length; row++) {
    for (let col = 4; col < matr[row].length; col++) {
      if (row === obj.row && col === obj.col && matr[row][col] !== 'F' && matr[row][col] !== 'L' && matr[row][col] !== 'O' && matr[row][col] !== 'W') character += chalk.hex('#20620B').bgBlack.bold('@');
      else if (matr[row][col] === 0 && row < 9) character += ' '.bgBlue;
      else if (matr[row][col] === 0) character += ' '.bgGrey;
      else if (matr[row][col] === 'F' && f) character += 'F'.yellow.bgGray;
      else if (matr[row][col] === 'L' && l) character += 'L'.yellow.bgGray;
      else if (matr[row][col] === 'O' && o) character += 'O'.yellow.bgGray;
      else if (matr[row][col] === 'W' && w) character += 'W'.yellow.bgGray;
      else if (matr[row][col] === 'F' && !f) character += 'F'.green.bgGray;
      else if (matr[row][col] === 'L' && !l) character += 'L'.green.bgGray;
      else if (matr[row][col] === 'O' && !o) character += 'O'.green.bgGray;
      else if (matr[row][col] === 'W' && !w) character += 'W'.green.bgGray;
      else if (matr[row][col] === 7) character += chalk.yellow.bgRed.bold('¤');
      else if (matr[row][col] === 6) character += chalk.yellow.bgBlue.bold('¤');
      else if (matr[row][col] === 5) character += chalk.yellow.bgGreen.bold('¤');
      else if (matr[row][col] === 4) character += chalk.rgb(205, 133, 63).bgHex('#FFE5CC').bold('W');
      else if (matr[row][col] === 8) character += chalk.rgb(205, 133, 63).bgHex('#FFE5CC').bold('W');
      else if (matr[row][col] === 2) {
        character += chalk.hex('#20620B').bgWhite.bold('O');
      }
    }
    character += '\n';
  }
  return character;
};

const move = (array, vehicle, direction, newTick, spacing, speed) => {
  if (direction > 0 && (newTick % speed === 0)) {
    if ((newTick % spacing === 0)) {
      array.pop();
      array.unshift(0);
      for (let i = 0; i < vehicle.length; i++) {
        array[i] = vehicle[i];
      }
    } else {
      array.unshift(0);
      array.pop();
    }    
  }

  if (direction < 0 && (newTick % speed === 0)) {
    if ((newTick % spacing === 0)) {
      array.shift();
      array.push(0);
      for (let i = vehicle.length; i > 0; i--) {
        array[array.length - i] = vehicle[vehicle.length - i];
      }
    } else {
      array.shift();
      array.push(0);
    }
  }
  return array;
};

const sound = (tick ,tickTime) => {
  if(tick  % tickTime === 0)
  beeper('*');
};


module.exports = {
  matrixGenerator: matrixGenerator,
  frogCoordinator: frogCoordinator,
  finishMaker: finishMaker,
  frogLeft: frogLeft,
  frogRight: frogRight,
  frogUp: frogUp,
  frogDown: frogDown,
  westBorder: westBorder,
  eastBorder: eastBorder,
  northBorder: northBorder,
  southBorder: southBorder,
  layer: layer,
  move: move,
  sound: sound
};
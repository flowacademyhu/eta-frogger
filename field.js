const chalk = require('chalk');
const colors = require('colors');

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
};
const eastBorder = (obj) => {
  if (obj.col < 36) return true;
};
const southBorder = (obj) => {
  if (obj.row < 19) return true;
};
const northBorder = (obj) => {
  if (obj.row > 1 ||
  (obj.row === 1 && obj.col === 9) ||
  (obj.row === 1 && obj.col === 17) ||
  (obj.row === 1 && obj.col === 25) ||
  (obj.row === 1 && obj.col === 33)) {
    return true;
  }
};

const layer = (matr, obj) => {
  let character = '';
  for (let row = 0; row < matr.length; row++) {
    for (let col = 4; col < matr[row].length; col++) {
      if (row === obj.row && col === obj.col && matr[row][col] !== 'F' && matr[row][col] !== 'L' && matr[row][col] !== 'O' && matr[row][col] !== 'W') {
        character += chalk.hex('#20620B').bgBlack.bold('@');
      } else if (row === obj.row && col === obj.col && matr[row][col] === 'F') {
        character += 'F'.green.bgGray;
      } else if (row === obj.row && col === obj.col && matr[row][col] === 'L') {
        character += 'L'.green.bgGray;
      } else if (row === obj.row && col === obj.col && matr[row][col] === 'O') {
        character += 'O'.green.bgGray;
      } else if (row === obj.row && col === obj.col && matr[row][col] === 'W') {
        character += 'W'.green.bgGray;
      } else if (matr[row][col] === 0) {
        character += ' '.bgGrey;
      } else if (matr[row][col] === 'F') {
        character += 'F'.yellow.bgGray;
      } else if (matr[row][col] === 'L') {
        character += 'L'.yellow.bgGray;
      } else if (matr[row][col] === 'O') {
        character += 'O'.yellow.bgGray;
      } else if (matr[row][col] === 'W') {
        character += 'W'.yellow.bgGray;
      } else if (matr[row][col] === 7) {
        character += chalk.yellow.bgRed.bold('¤');
      } else if (matr[row][col] === 6) {
        character += chalk.yellow.bgBlue.bold('¤');
      } else if (matr[row][col] === 5) {
        character += chalk.yellow.bgGreen.bold('¤');
      } else if (matr[row][col] === 4) {
        character += chalk.rgb(205, 133, 63).bgHex('#FFE5CC').bold('W');
      } else if (matr[row][col] === 8) {
        character += chalk.rgb(205, 133, 63).bgHex('#FFE5CC').bold('W');
      } else if (matr[row][col] === 2) {
        character += chalk.hex('#20620B').bgWhite.bold('O');
      }
    }
    character += '\n';
  }
  return character;
};

const move = (array, vehicle, direction, newTick, spacing) => {
  if (direction > 0) {
    if (newTick % spacing === 0) {
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
  if (direction < 0) {
    if (newTick % spacing === 0) {
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

const check = (matr, obj, time) => {
  for (let row = 1; row < matr.length; row++) {
    for (let col = 4; col < matr[row].length; col++) {
      if (matr[row][col] === 0 && row === obj.row && col === obj.col && row < 9) {
        process.exit();
      }
      if (
        (matr[row][col] === 'F' && row === obj.row && col === obj.col) ||
        (matr[row][col] === 'L' && row === obj.row && col === obj.col) ||
        (matr[row][col] === 'O' && row === obj.row && col === obj.col) ||
        (matr[row][col] === 'W' && row === obj.row && col === obj.col) ||
        (matr[row][col] === 7 && row === obj.row && col === obj.col) ||
        (matr[row][col] === 6 && row === obj.row && col === obj.col) ||
        (matr[row][col] === 5 && row === obj.row && col === obj.col)) {
        console.log('halál');
        process.exit();
      }
      if (matr[row][col] === 4 && row === obj.row && col === obj.col) {
        obj.col += 1;
        break;
      }
      if (time === 0) {
        console.clear();
        console.log('Time is up');
        process.exit();
      }
      if (matr[row][col] === 2 && row === obj.row && col === obj.col) {
        obj.col -= 1;
        break;
      }
      if (matr[row][col] === 8 && row === obj.row && col === obj.col) {
        obj.col -= 1;
        break;
      }
    }
  }
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
  check: check
};
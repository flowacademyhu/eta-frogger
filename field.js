const chalk = require('chalk');
const colors = require('colors');
const readLine = require('readline');
const test = require('./game.js');

const cord = test.cord;

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
  matrix[0][8] = 'F';
  matrix[0][16] = 'L';
  matrix[0][24] = 'O';
  matrix[0][32] = 'W';
  matrix[19][6] = 'T';
  matrix[19][7] = 'I';
  matrix[19][8] = 'M';
  matrix[19][9] = 'E';
  matrix[19][10] = ':';
  matrix[19][15] = 'P';
  matrix[19][16] = 'O';
  matrix[19][17] = 'I';
  matrix[19][18] = 'N';
  matrix[19][19] = 'T';
  matrix[19][20] = 'S';
  matrix[19][21] = ':';
  matrix[19][28] = 'L';
  matrix[19][29] = 'I';
  matrix[19][30] = 'F';
  matrix[19][31] = 'E';
  matrix[19][32] = ':';
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
  if (obj.col < 36) return true;
  return false;
};
const southBorder = (obj) => {
  if (obj.row < 18) return true;
};
const northBorder = (obj, f, l, o, w) => {
  if (obj.row > 1 ||
  (obj.row === 1 && obj.col === 8 && f) ||
  (obj.row === 1 && obj.col === 16 && l) ||
  (obj.row === 1 && obj.col === 24 && o) ||
  (obj.row === 1 && obj.col === 32 && w)) {
    return true;
  }
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
const layer = (matr, obj, f, l, o, w, int, point, life) => {
  let character = '';
  for (let row = 0; row < matr.length; row++) {
    for (let col = 4; col < matr[row].length - 4; col++) {
      if (row === obj.row && col === obj.col && matr[row][col] !== 'F' && matr[row][col] !== 'L' && matr[row][col] !== 'O' && matr[row][col] !== 'W') character += chalk.hex('#20620B').bgBlack.bold('@');
      else if (matr[row][col] === 0 && row < 9) character += ' '.bgBlue;
      else if (matr[row][col] === 0) character += ' '.bgGrey;
      else if (matr[row][col] === 'F' && row === 19) character += 'F'.green.bgBlack;
      else if (matr[row][col] === 'F' && f) character += 'F'.yellow.bold;
      else if (matr[row][col] === 'L' && row === 19) character += 'L'.green.bgBlack;
      else if (matr[row][col] === 'L' && l) character += 'L'.yellow.bgBlack.bold;
      else if (matr[row][col] === 'O' && row === 19) character += 'O'.green.bgBlack;
      else if (matr[row][col] === 'O' && o) character += 'O'.yellow.bgBlack.bold;
      else if (matr[row][col] === 'W' && w) character += 'W'.yellow.bgBlack.bold;
      else if (matr[row][col] === 'F' && !f) character += 'F'.red.bgGreen.bold;
      else if (matr[row][col] === 'L' && !l) character += 'L'.red.bgGreen.bold;
      else if (matr[row][col] === 'O' && !o) character += 'O'.red.bgGreen.bold;
      else if (matr[row][col] === 'W' && !w) character += 'W'.red.bgGreen.bold;
      else if (matr[row][col] === 'T') character += 'T'.green.bgBlack;
      else if (matr[row][col] === 'I') character += 'I'.green.bgBlack;
      else if (matr[row][col] === 'M') character += 'M'.green.bgBlack;
      else if (matr[row][col] === 'E') character += 'E'.green.bgBlack;
      else if (matr[row][col] === ':') character += ':'.green.bgBlack;
      else if (matr[row][col] === 'P') character += 'P'.green.bgBlack;
      else if (matr[row][col] === 'N') character += 'N'.green.bgBlack;
      else if (matr[row][col] === 'S') character += 'S'.green.bgBlack;
      else if (matr[row][col] === 7) character += chalk.yellow.bgRed.bold('¤');
      else if (matr[row][col] === 6) character += chalk.yellow.bgBlue.bold('¤');
      else if (matr[row][col] === 5) character += chalk.yellow.bgGreen.bold('¤');
      else if (matr[row][col] === 4) character += chalk.rgb(205, 133, 63).bgHex('#FFE5CC').bold('W');
      else if (matr[row][col] === 8) character += chalk.rgb(205, 133, 63).bgHex('#FFE5CC').bold('W');
      else if (matr[row][col] === 2) character += chalk.hex('#20620B').bgWhite.bold('O');
      if (int.toString().length > 1) {
        if (row === 19 && col === 11) character += (int.toString()[0]).red.bgBlack;
        else if (row === 19 && col === 12) character += (int.toString()[1]).red.bgBlack;
      } else if (int.toString().length <= 1) {
        if (row === 19 && col === 11) character += '0'.red.bgBlack;
        else if (row === 19 && col === 12) character += (int.toString()[0]).red.bgBlack;
      } if (point.toString().length > 3) {
        if (row === 19 && col === 22) character += (point.toString()[0]).red.bgBlack;
        else if (row === 19 && col === 23) character += (point.toString()[1]).red.bgBlack;
        else if (row === 19 && col === 24) character += (point.toString()[2]).red.bgBlack;
        else if (row === 19 && col === 25) character += (point.toString()[3]).red.bgBlack;
      } else if (point.toString().length > 2) {
        if (row === 19 && col === 22) character += '0'.red.bgBlack;
        else if (row === 19 && col === 23) character += (point.toString()[0]).red.bgBlack;
        else if (row === 19 && col === 24) character += (point.toString()[1]).red.bgBlack;
        else if (row === 19 && col === 25) character += (point.toString()[2]).red.bgBlack;
      } else if (point.toString().length > 1) {
        if (row === 19 && col === 22) character += '0'.red.bgBlack;
        else if (row === 19 && col === 23) character += '0'.red.bgBlack;
        else if (row === 19 && col === 24) character += (point.toString()[0]).red.bgBlack;
        else if (row === 19 && col === 25) character += (point.toString()[1]).red.bgBlack;
      } if (row === 19 && col === 33) character += (life.toString()[0]).red.bgBlack;
    }
    character += '\n';
  }
  return character;
};

const arcadeTime = (matrix, int) => {
  const stringTime = int.toString();
  if (stringTime.length > 1) {
    matrix[19][11] = stringTime[0];
    matrix[19][12] = stringTime[1];
  } else {
    matrix[19][12] = stringTime[0];
  }
  return stringTime;
};

const arcadePoints = (matrix, int) => {
  const stringPoint = int.toString();
  if (stringPoint.length > 1) {
    matrix[19][22] = '0';
    matrix[19][23] = '0';
    matrix[19][24] = stringPoint[0];
    matrix[19][25] = stringPoint[1];
  } else if (stringPoint.length > 2) {
    matrix[19][22] = '0';
    matrix[19][23] = stringPoint[0];
    matrix[19][24] = stringPoint[1];
    matrix[19][25] = stringPoint[2];
  } else if (stringPoint.length > 3) {
    matrix[19][22] = stringPoint[0];
    matrix[19][23] = stringPoint[1];
    matrix[19][24] = stringPoint[2];
    matrix[19][25] = stringPoint[3];
  }
  return stringPoint;
};

const arcadeLife = (matrix, int) => {
  const stringLife = int.toString();
  matrix[19][33] = stringLife[0];
  return stringLife;
}; 

const standardInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.resume();
  stdin.setEncoding('utf8');
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
  move: move,
  layer: layer,
  arcadeTime: arcadeTime,
  arcadePoints: arcadePoints,
  arcadeLife: arcadeLife,
  standardInput: standardInput
};

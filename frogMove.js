let table = require('table');

const matrixGenerator = (row, col, filler) => {
  const matrix = [];
  for (var i = 0; i < row; i++) {
    matrix[i] = [];
    for (var j = 0; j < col; j++) {
      matrix[i][j] = filler;
    }
  }
  return matrix;
};

const map = matrixGenerator(14, 25, 0);

const frogMatrixStarter = (matrix, row, col) => {
  const matr = matrix.slice();
  matr[row][col] = 1;
  return matr;
};

const x = frogMatrixStarter(map, 13, 12);
console.log(table.table(x));

const frogCoordinator = (row, col) => {
  const cord = {
    row: row,
    col: col
  };
  return cord;
};

const cord = frogCoordinator(13, 12);

const frogLeft = () => {
  map[cord.row][cord.col] = 0;
  map[cord.row][--cord.col] = 1;
  console.clear();
  console.log(table.table(map));
};

const frogRight = () => {
  map[cord.row][cord.col] = 0;
  map[cord.row][++cord.col] = 1;
  console.clear();
  console.log(table.table(map));
};

const frogUp = () => {
  map[cord.row][cord.col] = 0;
  map[--cord.row][cord.col] = 1;
  console.clear();
  console.log(table.table(map));
};

const frogDown = () => {
  map[cord.row][cord.col] = 0;
  map[++cord.row][cord.col] = 1;
  console.clear();
  console.log(table.table(map));
};

const finishLine = () => {
if (
(cord.row == 2 && cord.col == 6) ||
(cord.row == 2 && cord.col == 10) || 
(cord.row == 2 && cord.col == 14) ||
(cord.row == 2 && cord.col == 18)) {
return true;
}
};

const westBorder = () => {
  if (cord.col > 4) return true;
};

const eastBorder = () => {
  if (cord.col < 20) return true;
};

const southBorder = () => {
  if (cord.row < 13) return true;
};

const northBorder = () => {
  if (cord.row > 2) return true;
};

// A frogMove bekéri billenytűket a felhasználótól és modsítja a béka helyét a mátrixban.
const frogMove = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.resume();
  stdin.setEncoding('utf8');
  stdin.on('data', keyboardFn);
  function keyboardFn (key) {
    if (key === 'a' && westBorder()) {
      frogLeft();
    }
    if (key === 'd' && eastBorder()) {
      frogRight();
    }
    if (key === 'w' && (northBorder() || finishLine())) {
      frogUp();
    }
    if (key === 's' && southBorder()) {
      frogDown();
    }
    if (key === 'q') {
      process.exit();
    }
  }
};

frogMove();

module.exports = {
  frogMatrixStarter: frogMatrixStarter,
  frogCoordinator: frogCoordinator,
  frogMove: frogMove,
  frogUp: frogUp,
  frogDown: frogDown,
  frogLeft: frogLeft,
  frogRight: frogRight,
  northBorder: northBorder,
  southBorder: southBorder,
  eastBorder: eastBorder,
  westBorder: westBorder,
  finishLine: finishLine
};


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

//A megadott mátrixban adott sor és oszlopkordináton elhelyezi a békát. 
const frogMatrixStarter = (matrix, row, col) => {
  const matr = matrix.slice();
  matr[row][col] = '@';
  return matr;
};

const x = frogMatrixStarter(map, 13, 12);
console.log(x);

//Erre a függvényre azért van szükség mert a következő frogMove függvény a billenytyű parancsoknál az adott objektum sor és oszlopelemeit módosítja.
const frogCoordinator = (row, col) => {
  const cord = {
    row: row,
    col: col
  };
  return cord;
};

let cord = frogCoordinator(13, 12);

//A frogMove bekéri billenytűket a felhasználótól és modsítja a béka helyét a mátrixban. 
const frogMove = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.resume();
  stdin.setEncoding('utf8');
  stdin.on('data', keyboardFn);
  function keyboardFn (key) {
    if (key === 'a' && cord.col > 4) {
      map[cord.row][cord.col] = 0;
      map[cord.row][--cord.col] = 5;
      console.clear();
      console.log(map);
    }
    if (key === 'd' && cord.col < 20) {
      map[cord.row][cord.col] = 0;
      map[cord.row][++cord.col] = 5;
      console.clear();
      console.log(map);
    }
    if (key === 'w' && cord.row > 2) {
      map[cord.row][cord.col] = 0;
      map[--cord.row][cord.col] = 5;
      console.clear();
      console.log(map);
    }
    if (key === 's' && cord.row < 13) {
      map[cord.row][cord.col] = 0;
      map[++cord.row][cord.col] = 5;
      console.clear();
      console.log(map);
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
  frogMove: frogMove
};

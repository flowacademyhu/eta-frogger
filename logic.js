const matrixGenerator = (row, col, filler) => {
  let matrix = [];
  for (let i = 0; i < row; i++) {
    matrix[i] = [];
    for (let j = 0; j < col; j++) {
      matrix[i][j] = filler;
    }
  }
  return matrix;
};

let map = matrixGenerator(14, 25, 0);

const frogMatrixStarter = (matrix, row, col) => {
  const matr = matrix.slice();
  matr[row][col] = 1;
  return matr;
};

const x = frogMatrixStarter(map, 13, 12);

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
  console.log(map);
};

const frogRight = () => {
  map[cord.row][cord.col] = 0;
  map[cord.row][++cord.col] = 1;
  console.clear();
  console.log(map);
};

const frogUp = () => {
  map[cord.row][cord.col] = 0;
  map[--cord.row][cord.col] = 1;
  console.clear();
  console.log(map);
};

const frogDown = () => {
  map[cord.row][cord.col] = 0;
  map[++cord.row][cord.col] = 1;
  console.clear();
  console.log(map);
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

// kocsi

const car1 = [7, 7, 7, 7, 7];
const car2 = [6, 6, 6];
const car3 = [5, 5];

// fa
const treeLog1 = [4, 4, 4, 4, 4];
const treeLog2 = [3, 3, 3];
const treeLog3 = [2, 2];

// út
const road = [0, 0, 0, 0];

const move = (array, vehicle, direction, newTick) => {
  if (direction > 0) {
    if (newTick % 8 === 0) {
      for (let i = 0; i < vehicle.length; i++) {
        array[i] = vehicle[i];
      }
    } else {
      array.unshift(0);
      array.pop();
    }
  }

  if (direction < 0) {
    if (newTick % 8 === 0) {
      for (let i = vehicle.length; i > 0; i--) {
        array[array.length - 1] = vehicle[vehicle.length - 1];
        array[array.length - 2] = vehicle[vehicle.length - 2];
      }
    } else {
      array.shift();
      array.push(0);
    }
  }
  return array;
};

let tick = 4;
// move(map[1], car1, -1);
setInterval(() => {
  console.clear();
  move(map[2], treeLog3, -1, tick);
  move(map[3], treeLog2, 1, tick);
  move(map[4], treeLog3, -1, tick);
  move(map[5], treeLog1, 1, tick);
  move(map[6], treeLog3, -1, tick);

  move(map[8], car1, 1, tick);
  move(map[9], car3, -1, tick);
  move(map[10], car2, 1, tick);
  move(map[11], car3, -1, tick);
  move(map[12], car2, 1, tick);
  console.log(map);
  tick += 1;
}, 300);

frogMove();

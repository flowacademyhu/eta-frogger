let table = require('table');
let term = require('terminal-kit').terminal;
let ctx = require('axel');


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

let map = matrixGenerator(23, 41, 0);

const frogMatrixStarter = (matrix, row, col) => {
  const matr = matrix.slice();
  matr[row][col] = 1;
  return matr;
};


const frogCoordinator = (row, col) => {
  const cord = {
    row: row,
    col: col
  };
  return cord;
};


const cord = frogCoordinator(22, 20);

let a = 0;
const frogLeft = () => {
  cord.col--;
};
const frogRight = () => {
  cord.col++;
};
const frogUp = () => {
  cord.row--;
};
const frogDown = () => {
  cord.row++;
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
  if (cord.col < 36) return true;
};
const southBorder = () => {
  if (cord.row < 22) return true;
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
      console.clear();
      console.log(layer(map));
      console.log(cord.row, cord.col);
    }
    if (key === 'd' && eastBorder()) {
      frogRight();
      console.clear();
      console.log(layer(map));
      console.log(cord.row, cord.col);
    }
    if (key === 'w' && (northBorder() || finishLine())) {
      frogUp();
      console.clear();
      console.log(layer(map));
      console.log(cord.row, cord.col);
    }
    if (key === 's' && southBorder()) {
      frogDown();
      console.clear();
      console.log(layer(map));
      console.log(cord.row, cord.col);
    }
    if (key === 'q') {
      process.exit();
    }
  }
  console.clear();
};

const car1 = [7, 7, 7];
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

const layer = (matr) => {
  let character = '';
  for (let row = 1; row < matr.length; row++) {
    for (let col = 4; col < matr[row].length; col++) {
      if (row === cord.row && col === cord.col) {
        character += '\x1b[32m@\x1b[0m';
      } else if (matr[row][col] === 0) {
        character += '░';
      } else if (matr[row][col] === 7) {
        character += 'c'; 
      } else if (matr[row][col] === 6) {
        character += 'c'; 
      } else if (matr[row][col] === 5) {
        character += 'c'; 
      } else if (matr[row][col] === 4) {
        character += 'w'; 
      } else if (matr[row][col] === 3) {
        character += 'o';
      } else if (matr[row][col] === 2) {
        character += 'o';
      }
    }
    character += '\n';
  }
  return character;
};
const check = (matr) => {
  for (let row = 1; row < matr.length; row++) {
    for (let col = 4; col < matr[row].length; col++) {
  if(matr[row][col] === 0 && row === cord.row && col === cord.col){
    //halál
  }    
  if ((matr[row][col] === 9 && row === cord.row && col === cord.col) ||
      (matr[row][col] === 7 && row === cord.row && col === cord.col) ||
      (matr[row][col] === 6 && row === cord.row && col === cord.col) ||
      (matr[row][col] === 5 && row === cord.row && col === cord.col)) {
       console.log('halál');
  }

  if ((matr[row][col] === 4 && row === cord.row && col === cord.col) ||
      (matr[row][col] === 3 && row === cord.row && col === cord.col) ||
      (matr[row][col] === 2 && row === cord.row && col === cord.col)) {
      console.log('élet');
  }
 
  
    }   
  }
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
  move(map[7], treeLog2, 1, tick);
  move(map[8], treeLog3, -1, tick);
  move(map[9], treeLog3, -1, tick);

  move(map[11], car1, 1, tick);
  move(map[12], car2, -1, tick);
  move(map[13], car2, -1, tick);
  move(map[14], car2, 1, tick);
  move(map[15], car2, -1, tick);
  move(map[16], car3, 1, tick);
  move(map[17], car3, -1, tick);
  move(map[18], car3, 1, tick);

  console.log(layer(map));
  check(map);
  tick += 1;
  
}, 300);

frogMove();
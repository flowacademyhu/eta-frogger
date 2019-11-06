let table = require('table');
let term = require('terminal-kit').terminal;
let ctx = require('axel');
let colors = require('colors');
let readLine = require('readline-sync');
let chalk = require('chalk');

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

let map = matrixGenerator(20, 41, 0);

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
  return matrix;
};

map = finishMaker(map);
const cord = frogCoordinator(18, 20);

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

const westBorder = () => {
  if (cord.col > 4) return true;
};
const eastBorder = () => {
  if (cord.col < 36) return true;
};
const southBorder = () => {
  if (cord.row < 19) return true;
};
const northBorder = () => {
  if (cord.row > 1 ||
  (cord.row === 1 && cord.col === 8) ||
  (cord.row === 1 && cord.col === 16) || 
  (cord.row === 1 && cord.col === 24) ||
  (cord.row === 1 && cord.col === 32)) {
    return true;
  } 
};

// A frogMove bekéri billenytűket a felhasználótól és modsítja a béka helyét a mátrixban.
const main = () => {
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
    }
    if (key === 'd' && eastBorder()) {
      frogRight();
      console.clear();
      console.log(layer(map));
    }
    if (key === 'w' && (northBorder())) {
      frogUp();
      console.clear();
      console.log(layer(map));
    }
    if (key === 's' && southBorder()) {
      frogDown();
      console.clear();
      console.log(layer(map));
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

const treeLog1 = [4, 4, 4, 4, 4];
const treeLog2 = [2, 2, 2];
const treeLog3 = [3, 3];

const move = (array, vehicle, direction, newTick) => {
  if (direction > 0) {
    if (newTick % 8 === 0) {
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
    if (newTick % 8 === 0) {
     array.shift();
     array.push(0);
      for (let i = vehicle.length; i > 0; i--) {
        array[array.length - 1] = vehicle[vehicle.length - 1];
        array[array.length - 2] = vehicle[vehicle.length - 2];
        array[array.length - 3] = vehicle[vehicle.length - 3];
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
  for (let row = 0; row < matr.length; row++) {
    for (let col = 4; col < matr[row].length; col++) {
      if (row === cord.row && col === cord.col && matr[row][col] !== 'F' && matr[row][col] !== 'L' && matr[row][col] !== 'O' && matr[row][col] !== 'W' ) {
        character += chalk.hex('#20620B').bgBlack.bold('@');
      } else if (row === cord.row && col === cord.col && matr[row][col] === 'F') {
        character += 'F'.green.bgGray;
      } else if (row === cord.row && col === cord.col && matr[row][col] === 'L') {
        character += 'L'.green.bgGray;
      } else if (row === cord.row && col === cord.col && matr[row][col] === 'O') {
        character += 'O'.green.bgGray;
      } else if (row === cord.row && col === cord.col && matr[row][col] === 'W') {
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
        character += chalk.rgb(205,133,63).bgHex('#FFE5CC').bold('W');
      } else if (matr[row][col] === 3) {
        character += chalk.hex('#20620B').bgWhite.bold('O');
      } else if (matr[row][col] === 2) {
        character += chalk.hex('#20620B').bgWhite.bold('O');
      }
    }
    character += '\n';
  }
  return character;
};

const check = (matr) => {
  for (let row = 1; row < matr.length; row++) {
    for (let col = 4; col < matr[row].length; col++) {
      if (
        (matr[row][col] === 'F' && row === cord.row && col === cord.col ) ||
        (matr[row][col] === 'L' && row === cord.row && col === cord.col ) ||
        (matr[row][col] === 'O' && row === cord.row && col === cord.col ) ||
        (matr[row][col] === 'W' && row === cord.row && col === cord.col ) ||
        (matr[row][col] === 7 && row === cord.row && col === cord.col) ||
        (matr[row][col] === 6 && row === cord.row && col === cord.col) ||
        (matr[row][col] === 5 && row === cord.row && col === cord.col)) {
        console.log('halál');
        process.exit();
      }
      if (matr[row][col] === 0 && row === cord.row && col === cord.col && row < 9) {
        console.log('You are dead! New game? Y/N'); 
        const key = readLine.keyInYNStrict();
         if(key === 'y'){
        } else {
          console.clear();
        }
      if (matr[row][col] === 4 && row === cord.row && col === cord.col) {
        console.log('ÉLET');
        cord.col = cord.col + 1;
        break;
      }
      if (matr[row][col] === 3 && row === cord.row && col === cord.col) {
        console.log('ÉLET');
        cord.col -= 1;
        break;
      }
      if (matr[row][col] === 2 && row === cord.row && col === cord.col) {
        console.log('ÉLET');
        cord.col -= 1;
        break;
      }
      if (matr[row][col] === 8 && row === cord.row && col === cord.col) {
        console.log('ÉLET');
        cord.col += 1;
        break;
      } 
    }
  }
};

let tick = 4;
check(map);
setInterval(() => {
  console.clear();
  move(map[1], treeLog2, -1, tick);
  move(map[2], treeLog1, 1, tick);
  move(map[3], treeLog2, -1, tick);
  move(map[4], treeLog1, 1, tick);
  move(map[5], treeLog2, -1, tick);
  move(map[6], treeLog1, 1, tick);
  move(map[7], treeLog2, -1, tick);
  move(map[8], treeLog2, -1, tick);

  move(map[10], car1, 1, tick);
  move(map[11], car2, -1, tick);
  move(map[12], car2, -1, tick);
  move(map[13], car3, 1, tick);
  move(map[14], car2, -1, tick);
  move(map[15], car2, 1, tick);
  move(map[16], car2, -1, tick);
  move(map[17], car3, 1, tick);
  
  console.log(layer(map));
  check(map);
  tick += 1;
}, 200);

main();

//move tick
//move helyett a seitntervalba, tickbe minden sornak egy és if bele hogy maradékosan osztható e.
// ha 500ms megy akkor minden 2ik alkalommal veygen le egyet a 60s ből és a végén pedig ha elfogy akkor hivjuk meg a halál függvényt vagy vonjon 
//le egyet az életből.
// contains a sor a bekát tartalmazza és ha benne van akkor move eseteben pussholunk vagy unshiftnél.


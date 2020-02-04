const term = require('terminal-kit').terminal;
const colors = require('colors');
const readLine = require('readline-sync');
const chalk = require('chalk');
const field = require('./field.js');
const fs = require('fs');
const topScores = require('./topScores.js');
const result1 = require('./result.json');
const fakeLoad = require('./fakeload.js');
const mpg = require('mpg123');
const elements = require('./menuElements.js');


const game = () => {
  let map = field.matrixGenerator(20, 41, 0);
  map = field.finishMaker(map);
  const cord = field.frogCoordinator(18, 20);
  let life = 4;
  let points = 0;
  let fCheck = true;
  let lCheck = true;
  let oCheck = true;
  let wCheck = true;
  let timeTick = 0;
  let timeStartAt = 53;
  let tick = 4;

  let userName = readLine.question('Please give me your username: ');

  let player = new mpg.MpgPlayer();
  player.play('./zene.mp3');

  let resultJson = fs.readFileSync('result.json');
  let result = JSON.parse(resultJson);

  const fieldLayer = () => {
    console.clear();
    console.log(field.layer(map, cord, fCheck, lCheck, oCheck, wCheck, timeStartAt, points, life));
  };

  const main = () => {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.resume();
    stdin.setEncoding('utf8');
    stdin.on('data', keyboardFn);
    function keyboardFn(key) {
      if (key === 'a' && field.westBorder(cord)) {
        field.frogLeft(cord);
        fieldLayer();  //ads
      }
      if (key === 'd' && field.eastBorder(cord)) {
        field.frogRight(cord);
        fieldLayer();
      }
      if (key === 'w' && field.northBorder(cord, fCheck, lCheck, oCheck, wCheck)) {
        field.frogUp(cord);
        fieldLayer();
      }
      if (key === 's' && field.southBorder(cord)) {
        field.frogDown(cord);
        fieldLayer();
      }
      if (key === 'x') {
        result[userName] = points;
        const jsonBoard = JSON.stringify(result);
        fs.writeFileSync('result.json', jsonBoard);
        term.reset();
        process.exit();
      }
    }
    console.clear();
  };

  const car1 = [5, 5, 5];
  const car2 = [6, 6, 6, 6];
  const car3 = [7, 7, 7, 7];

  const treeLog1 = [2, 2, 2, 2, 2];
  const treeLog2 = [4, 4, 4, 4, 4];

  main();

  const reset = () => {
    cord.row = 18;
    cord.col = 20;
    timeStartAt = 45;
  };

  const reset2 = () => {
    fCheck = true;
    lCheck = true;
    oCheck = true;
    wCheck = true;
    life = 4;
    cord.row = 18;
    cord.col = 20;
    timeStartAt = 45;
  };

  const reset3 = () => {
    points = 0;
    reset2();
  };



  const pointsAndStart = () => {
    points += 50 + timeStartAt;
    fCheck = false;
    lCheck = false;
    oCheck = false;
    wCheck = false;
    reset();
  };

  const finishChecker = (obj) => {
    if (!fCheck && !lCheck && !oCheck && !wCheck) {
    } else if ( (obj.row === 0 && obj.col === 8 && fCheck) || 
                (obj.row === 0 && obj.col === 16 && lCheck) ||
                (obj.row === 0 && obj.col === 24 && oCheck) ||  //
                (obj.row === 0 && obj.col === 32 && wCheck)) {
                  pointsAndStart();
                }
              }
            };

  const check = (matr, obj, time) => {
    for (let row = 1; row < matr.length; row++) {
      for (let col = 4; col < matr[row].length - 4; col++) {
        if (matr[row][col] === 0 && row === obj.row && col === obj.col && row < 9) {
          life -= 1;
          reset();
          console.clear();
        } if (
          (matr[row][col] === 7 && row === obj.row && col === obj.col) ||
          (matr[row][col] === 6 && row === obj.row && col === obj.col) ||
          (matr[row][col] === 5 && row === obj.row && col === obj.col) ||
          (field.westBorder(cord) === false) ||
          (field.eastBorder(cord) === false)) {
          life -= 1;
          reset();
        }
        if ((matr[row][col] === 2) || (matr[row][col] === 4) || (matr[row][col] === 8) 
        && row === obj.row && col === obj.col) {
          obj.col += 1;
          break;
        } //
      }
    }
  };

  const timer = (tick) => {
    if (tick % 5 === 0) {
      timeStartAt--;
    }
  };

  const lifeCheck = () => {
    if (life === 0) {
      elements.gameOver();
      const key = readLine.keyIn('\n');
      if (key === 'x' || key === 'X') {
        process.exit();
      } else if (key === 'p' || key === 'P') {
        reset3();
        field.standardInput();
      }
    }
  };

  const timeCheck = () => {
    if (timeStartAt === 0) {
      console.clear();
      life -= 1;
      reset();
    }
  };

  setInterval(() => {
    check(map, cord, timeStartAt);
    fakeLoad.fakeLoad();
    console.clear();
    for (let i = 1; i < 9; i++) {
      if (i === 0) {
        field.move(map[i], treeLog2, -1, tick, 8, tick / 4);
      } else {
        field.move(map[i], treeLog2, 11, tick, 16, tick / 4);
      }
    }
    for (let i = 10; i < 17; i++) {
      if (i === 0) {
        field.move(map[i], car2, -1, tick, 15, 2);
      } else {
        field.move(map[i], car2, 1, tick, 20, 2);
      }
    }
    console.log(field.layer(map, cord, fCheck, lCheck, oCheck, wCheck, timeStartAt, points, life));
    timer(timeTick);
    lifeCheck();
    timeCheck();
    field.arcadeTime(map, timeStartAt);
    field.arcadePoints(map, points);
    field.arcadeLife(map, life);
    finishChecker(cord);
    timeTick += 1;
    tick += 1;
  }, 200);
};

/*
  setInterval(() => {
    check(map, cord, timeStartAt);
    fakeLoad.fakeLoad();
    console.clear();
    field.move(map[1], treeLog2, -1, tick, 8, tick / 4);
    field.move(map[2], treeLog1, 1, tick, 17, tick / 4);
    field.move(map[3], treeLog2, -1, tick, 19, tick / 4);
    field.move(map[4], treeLog1, 1, tick, 19, tick / 4);
    field.move(map[5], treeLog2, -1, tick, 14, tick / 4);
    field.move(map[6], treeLog1, 1, tick, 21, tick / 4);
    field.move(map[7], treeLog2, -1, tick, 9, tick / 4);
    field.move(map[8], treeLog2, -1, tick, 9, tick / 4);

    field.move(map[10], car1, 1, tick, 25, 0.25);
    field.move(map[11], car2, -1, tick, 15, 2);
    field.move(map[12], car2, -1, tick, 8, 3);
    field.move(map[13], car3, 1, tick, 11, 3);
    field.move(map[14], car2, -1, tick, 20, 3);
    field.move(map[15], car1, 1, tick, 27, 0.25);
    field.move(map[16], car2, -1, tick, 18, 2);
    field.move(map[17], car3, 1, tick, 20, 2);

    console.log(field.layer(map, cord, fCheck, lCheck, oCheck, wCheck, timeStartAt, points, life));
    timer(timeTick);
    lifeCheck();
    timeCheck();
    field.arcadeTime(map, timeStartAt);
    field.arcadePoints(map, points);
    field.arcadeLife(map, life);
    finishChecker(cord);
    timeTick += 1;
    tick += 1;
  
})
};
*/
module.exports = {
  game: game
};

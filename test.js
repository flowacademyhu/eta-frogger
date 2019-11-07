const table = require('table');
const term = require('terminal-kit').terminal;
const ctx = require('axel');
const colors = require('colors');
const readLine = require('readline-sync');
const chalk = require('chalk');
const field = require('./field.js');
const fs = require('fs');



// global variables
let map = field.matrixGenerator(20, 41, 0);
map = field.finishMaker(map);
const cord = field.frogCoordinator(18, 20);
let life = 4;
let point = 0;
let fCheck = true;
let lCheck = true;
let oCheck = true;
let wCheck = true;
let timeTick = 0;
let timeStartAt = 30;
let tick = 4;
let userName = readLine.question('Please give me your username: ');

const game = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.resume();
  stdin.setEncoding('utf8');
  stdin.on('data', keyboardFn);
  function keyboardFn(key) {
    if (key === 'a' && field.westBorder(cord)) {
      field.frogLeft(cord);
      console.clear();
      console.log(field.layer(map, cord, fCheck, lCheck, oCheck, wCheck));
    }
    if (key === 'd' && field.eastBorder(cord)) {
      field.frogRight(cord);
      console.clear();
      console.log(field.layer(map, cord, fCheck, lCheck, oCheck, wCheck));
    }
    if (key === 'w' && field.northBorder(cord, fCheck, lCheck, oCheck, wCheck)) {
      field.frogUp(cord);
      console.clear();
      console.log(field.layer(map, cord, fCheck, lCheck, oCheck, wCheck));
    }
    if (key === 's' && field.southBorder(cord)) {
      field.frogDown(cord);
      console.clear();
      console.log(field.layer(map, cord, fCheck, lCheck, oCheck, wCheck));
    }
    if (key === 'p') {
      process.exit();
      
    }
  }
  console.clear();
};

const car1 = [7, 7, 7];
const car2 = [6, 6, 6];
const car3 = [5, 5];

const treeLog1 = [4, 4, 4, 4, 4];
const treeLog2 = [2, 2, 2, 2, 2];
const treeLog3 = [8, 8, 8, 8, 8];

game();

const reset = () => {
  cord.row = 18;
  cord.col = 20;
  timeStartAt = 30;
}

const finishChecker = (obj, point) => {
  if (obj.row === 0 && obj.col === 9 && fCheck) {
    point += 50;
    fCheck = false;
    console.log(point);
    reset();
  } else if (obj.row === 0 && obj.col === 17 && lCheck) {
    point += 50;
    lCheck = false;
    console.log(point);
    reset();
  } else if (obj.row === 0 && obj.col === 25 && oCheck) {
    point += 50;
    oCheck = false;
    console.log(point);
    reset();
  } else if (obj.row === 0 && obj.col === 33 && wCheck) {
    point += 50;
    wCheck = false;
    console.log(point);
    reset();
  }
};

if(fCheck === false && lCheck === false && oCheck === false && wCheck === false){
  console.log('You are won, new game?');
     const key = readLine.keyInYNStrict();
       if(key === 'y'){
       console.log()  
       }
}

const check = (matr, obj, time) => {
  for (let row = 1; row < matr.length; row++) {
    for (let col = 4; col < matr[row].length; col++) {
      if (matr[row][col] === 0 && row === obj.row && col === obj.col && row < 9) {
        // river
      } else if (
        (matr[row][col] === 7 && row === obj.row && col === obj.col) ||
        (matr[row][col] === 6 && row === obj.row && col === obj.col) ||
        (matr[row][col] === 5 && row === obj.row && col === obj.col) ||
        (field.westBorder(cord) === false) ||
        (field.eastBorder(cord) === false)) {
        life -= 1;
        reset();
      }
      if (matr[row][col] === 4 && row === obj.row && col === obj.col) {
        obj.col += 1;
        break;
      }
      if (life === 0) {
        console.log('Elfogytak az életeid');
        process.exit();
      }
      if (time === 0) {
        console.clear();
        console.log('Time is up');
        life -= 1;
        reset();
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

const timer = (tick) => {
  if (tick % 5 === 0) {
    timeStartAt--;
  }
  console.log(timeStartAt + ' s left.');
};



setInterval(() => {
  check(map, cord, timeStartAt);
  console.clear();
  field.move(map[1], treeLog2, -1, tick, 8, tick/2);
  field.move(map[2], treeLog1, 1, tick, 17, tick/2);
  field.move(map[3], treeLog2, -1, tick, 19,tick/2);
  field.move(map[4], treeLog1, 1, tick, 19, tick/2);
  field.move(map[5], treeLog2, -1, tick, 14,tick/2);
  field.move(map[6], treeLog1, 1, tick, 21, tick/2);
  field.move(map[7], treeLog2, -1, tick, 9, tick/2);
  field.move(map[8], treeLog2, -1, tick, 9, tick/2);
  field.move(map[10], car1, 1, tick, 25, 0.25);
  field.move(map[11], car2, -1, tick, 15, 2);
  field.move(map[12], car2, -1, tick, 8, 3);
  field.move(map[13], car3, 1, tick, 11, 3);
  field.move(map[14], car2, -1, tick, 20, 3);
  field.move(map[15], car1, 1, tick, 27, 0.25);
  field.move(map[16], car2, -1, tick, 18, 2);
  field.move(map[17], car3, 1, tick, 20, 2);
  console.log(field.layer(map, cord, fCheck, lCheck, oCheck, wCheck));
  console.log('You have ' + life + ' life(s) left.');
  timer(timeTick);
  finishChecker(cord, point, fCheck, lCheck, oCheck, wCheck);
  timeTick += 1;
  tick += 1;
  
}, 200);
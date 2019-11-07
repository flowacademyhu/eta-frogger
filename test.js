const table = require('table');
const term = require('terminal-kit').terminal;
const ctx = require('axel');
const colors = require('colors');
const readLine = require('readline-sync');
const chalk = require('chalk');
const field = require('./field.js');

let map = field.matrixGenerator(20, 41, 0);
map = field.finishMaker(map);
const cord = field.frogCoordinator(18, 20);



const main = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.resume();
  stdin.setEncoding('utf8');
  stdin.on('data', keyboardFn);
  function keyboardFn(key) {
    if (key === 'a' && field.westBorder(cord)) {
      field.frogLeft(cord);
      console.clear();
      console.log(field.layer(map, cord));
    }
    if (key === 'd' && field.eastBorder(cord)) {
      field.frogRight(cord);
      console.clear();
      console.log(field.layer(map, cord));
    }
    if (key === 'w' && field.northBorder(cord)) {
      field.frogUp(cord);
      console.clear();
      console.log(field.layer(map, cord));
    }
    if (key === 's' && field.southBorder(cord)) {
      field.frogDown(cord);
      console.clear();
      console.log(field.layer(map, cord));
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
const treeLog3 = [8, 8, 8, 8, 8];

let tick = 4;

main();

let life = 4;
let point = 0;
let fCheck = true;
let lCheck = true;
let oCheck = true;
let wCheck = true;

let timeTick = 0;
let timeStartAt = 30;

const timer = (tick) => {
  if (tick % 5 === 0) {
    console.log(timeStartAt);
    timeStartAt--;
  }
  return timeStartAt;
};

setInterval(() => {
  console.clear();
  field.move(map[1], treeLog3, -1, tick, 8);
  field.move(map[2], treeLog1, 1, tick, 20);
  field.move(map[3], treeLog2, -1, tick, 10);
  field.move(map[4], treeLog3, -1, tick, 20);
  field.move(map[5], treeLog2, -1, tick, 4);
  field.move(map[6], treeLog1, 1, tick, 20);
  field.move(map[7], treeLog2, -1, tick, 8);
  field.move(map[8], treeLog1, 1, tick, 8);
  field.move(map[10], car1, 1, tick, 8);
  field.move(map[11], car2, -1, tick, 8);
  field.move(map[12], car2, -1, tick, 8);
  field.move(map[13], car3, 1, tick, 11);
  field.move(map[14], car2, -1, tick, 15);
  field.move(map[15], car2, 1, tick, 8);
  field.move(map[16], car2, -1, tick, 8);
  field.move(map[17], car3, 1, tick, 8);
  console.log(field.layer(map, cord));
  field.check(map, cord, timeStartAt);
  timer(timeTick);
  field.finishChecker(cord, point, fCheck, lCheck, oCheck, wCheck);
  timeTick += 1;
  tick += 1;
}, 200);

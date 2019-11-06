const term = require('terminal-kit').terminal;
const termMenu = require('terminal-menu');
const topScorers = require('./topScorers.js');
const asciiArts = require('./asciiArt.js');

let title;
let design;
let firstOption;
let secondOption;
let thirdOption;
let lastOption;
let firstAction;
let secondAction;
let thirdAction;
let lastAction;

let menuCreator = () => {
  term.clear();
  title();
  design();
  let menu = termMenu({
    width: 12,
    x: 14,
    y: 18,
    fg: 'yellow',
    bg: 'black'
  });

  menu.write('MAIN MENU');
  menu.add(firstOption);
  menu.add(secondOption);
  menu.add(thirdOption);
  menu.add(lastOption);

  menu.on('select', function (label) {
    if (label === (firstOption)) {
      firstAction();
    } else if (label === (secondOption)) {
      console.clear();
      secondAction();
    } else if (label === (thirdOption)) {
      thirdAction();
    } else if (label === (lastOption)) {
      lastAction();
    }
  });
  process.stdin.pipe(menu.createStream()).pipe(process.stdout);

  process.stdin.setRawMode(true);
  menu.on('close', function () {
    process.stdin.setRawMode(false);
    process.stdin.end();
  });
};
title = asciiArts.mainMenuTitle;
design = asciiArts.mainMenuFrog;

firstOption = 'START';
secondOption = 'TOP SCORES';
thirdOption = 'HELP';
lastOption = 'ESCAPE';

firstAction = () => { 
  console.log('START');
};
secondAction = () => {
  topScorers.statGen();
};
thirdAction = () => {
  console.log('király');
};
lastAction = () => {
  process.exit();
};

menuCreator();

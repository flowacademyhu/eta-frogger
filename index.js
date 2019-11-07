const term = require('terminal-kit').terminal;
const elements = require('./menuElements.js');
const termMenu = require('terminal-menu');
const readLine = require('readline-sync');

const mainMenu = () => {
  term.clear();
  elements.mainMenuTitle();

  let menu = termMenu({
    width: 12,
    x: 14,
    y: 18,
    fg: 'yellow',
    bg: 'black'
  });

  menu.write('MAIN MENU');
  menu.add('NEW GAME');
  menu.add('TOP SCORES');
  menu.add('HELP');
  menu.add('EXIT');

  menu.on('select', function (label) {
    if (label === ('NEW GAME')) {
      console.log('START');
    } else if (label === ('TOP SCORES')) {
      console.clear();
      elements.topScorers();
      const key = readLine.keyIn('\n');
      if (key === 'q' || key === 'Q') {
        menu.reset();
      } else if (key === 'p' || key === 'P') {

      }
    } else if (label === ('HELP')) {
      console.clear();
      elements.help();
      const key = readLine.keyIn('\n');
      if (key === 'q' || key === 'Q') {
        menu.reset();
      } else if (key === 'p' || key === 'P') {
        //        
      }
    } else if (label === ('EXIT')) {
      process.exit();
    }
  });

  process.stdin.pipe(menu.createStream()).pipe(process.stdout);
  process.stdin.setRawMode(true);
  menu.on('close', function () {
    process.stdin.setRawMode(false);
    process.stdin.end();
  });
};

mainMenu();

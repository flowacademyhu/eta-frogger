const term = require('terminal-kit').terminal;
const elements = require('./menuElements.js');
const termMenu = require('terminal-menu');
const readLine = require('readline-sync');
const game = require('./game.js');


const mainMenu = () => {
  term.clear();
  elements.mainMenuTitle();
  const menu = termMenu({
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
      term.reset();
      game.game();
    } else if (label === ('TOP SCORES')) {
      term.clear();
      elements.topScorers();
      const key = readLine.keyIn('\n');
      if (key === 'q' || key === 'Q') {
        menu.reset();
      } else if (key === 'p' || key === 'P') {
        term.reset();
        game.game();
      }
    } else if (label === ('HELP')) {
      term.clear();
      elements.help();
      const key = readLine.keyIn('\n');
      if (key === 'q' || key === 'Q') {
        menu.reset();
      } else if (key === 'p' || key === 'P') {
        term.reset();
        game.game();
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

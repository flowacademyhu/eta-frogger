const term = require('terminal-kit').terminal;
const termMenu = require('terminal-menu');

const instructionsMenu = () => {
  const asciiArts = require('./asciiArt.js');
  term.clear();
  asciiArts.intructionsTitle();
  asciiArts.frogsDesign();

  const instMenu = termMenu({
    width: 12,
    x: 14,
    y: 18,
    fg: 'yellow',
    bg: 'black'
  });

  instMenu.write('MAIN MENU');
  instMenu.add('START');
  instMenu.add('TOP SCORES');
  instMenu.add('MAIN MENU');
  instMenu.add('EXIT');

  instMenu.on('select', function (label) {
    if (label === ('START')) {
      console.log('START');
    } else if (label === ('TOP SCORES')) {
      console.clear();
      topScorers.statGen();
    } else if (label === ('MAIN MENU')) {
      console.log('main menu');
    } else if (label === ('EXIT')) {
      process.exit();
    }
  });
  process.stdin.pipe(instMenu.createStream()).pipe(process.stdout);

  process.stdin.setRawMode(true);
  instMenu.on('close', function () {
    process.stdin.setRawMode(false);
    process.stdin.end();
  });
};
instructionsMenu();
module.exports = {
  instructionsMenu: instructionsMenu
};

let term = require('terminal-kit').terminal;
const termMenu = require('terminal-menu');
term.clear();

const menuTitle = () => {
  term.red();
  console.log('    ___  ___   __    __   __  ___  ___');  
  console.log('   (  _)(  ,) /  \\  / _) / _)(  _)(  ,)'); 
  console.log('   ) _) )   \\( () )( (/\\( (/\\ ) _) )  \\'); 
  console.log('   (_)  (_)\\_)\\__/  \\__/ \\__/(___)(_)\\_)');
  term.nextLine(2);
};

const menuFrog = () => {
  term.green();
  console.log('               ___      ___ ');
  console.log('              /   \\----/   \\ ');
  console.log('             |-----|  |-----| ');
  console.log('             /\\_0_/    \\_0_/\\ ');
  console.log('           -|      o  o      |-');
  console.log('          /  \\______________/  \\ ');
  console.log('          \\ \\ |   |    |   | / / ');
  console.log('           ww ooooo----ooooo ww ');
};
menuTitle();
menuFrog();

const menu = termMenu({
  width: 12,
  x: 14,
  y: 18,
  fg: 'yellow',
  bg: 'black'
});

menu.write('MAIN MENU')
menu.add('START');
menu.add('BEST SCORES');
menu.add('INSTRUCTIONS');
menu.add('EXIT');

menu.on('select', function (label) {
  if (label === ('START')) {
    console.log('START');
  } else if (label === ('BEST SCORES')) {
    console.log('best scores');
  } else if (label === ('INSTRUCTIONS')) {
    console.log('Instructions');
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
let readLine = require('readline-sync');
let term = require('terminal-kit').terminal;

const mainMenu = () => {
  console.log('    ___  ___   __    __   __  ___  ___');  
  console.log('   (  _)(  ,) /  \\  / _) / _)(  _)(  ,)'); 
  console.log('   ) _) )   \\( () )( (/\\( (/\\ ) _) )  \\'); 
  console.log('   (_)  (_)\\_)\\__/  \\__/ \\__/(___)(_)\\_)');
  console.log('               ___      ___ ');
  console.log('              /   \\----/   \\ ');
  console.log('             |-----|  |-----| ');
  console.log('             /\\_0_/    \\_0_/\\ ');
  console.log('           -|      o  o      |-');
  console.log('          /  \\______________/  \\ ');
  console.log('          \\ \\ |   |    |   | / / ');
  console.log('           ww ooooo----ooooo ww ');
};

mainMenu();
const menuArray = ['START', 'BEST SCORES', 'INSTRUCTIONS', 'ESCAPE'];
const menuOptions = {
  y: 20,
};

term.singleColumnMenu(menuArray, menuOptions);
// const menuFunctions = {
//   response.selectedIndex
// };

// term.singleColumnMenu(menuArray, menuOptions, menuFunctions);

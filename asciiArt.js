let term = require('terminal-kit').terminal;

// const mainMenuTitle = () => {
//   term.red();
//   console.log('    ___  ___   __    __   __  ___  ___');  
//   console.log('   (  _)(  ,) /  \\  / _) / _)(  _)(  ,)'); 
//   console.log('   ) _) )   \\( () )( (/\\( (/\\ ) _) )  \\'); 
//   console.log('   (_)  (_)\\_)\\__/  \\__/ \\__/(___)(_)\\_)');
//   term.nextLine(2);
// };

const mainMenuTitle = () => {
  term.red();
  console.log('      ____');
  console.log('     |  ___| __ ___   __ _  __ _  ___ _ __ ');
  console.log('     | |_ | \'__/ _ \\ / _` |/ _` |/ _ \\ \'__|');
  console.log('     |  _|| | | \(_\) | \(_| | \(_| |  __/ |');
  console.log('     |_|  |_|  \\___/ \\__, |\\__, |\\___|_|   ');
  console.log('                     |___/ |___/ ');
};
mainMenuTitle();

const topScorersTitle = () => {
  term.red();
  console.log('      _____             ____');
  console.log('     |_   _|__  _ __   / ___|  ___ ___  _ __ ___ _ __ ___');
  console.log('       | |/ _ \\| \'_ \\  \\___ \\ / __/ _ \\| \'__/ _ \\ \'__/ __|');
  console.log('       | | \(_\) | |_\) |  ___\) | \(_| \(_\) | | |  __/ |  \\__ \\');
  console.log('       |_|\\___/| .__/  |____/ \\___\\___/|_|  \\___|_|  |___/');
  console.log('                |_|');
};
topScorersTitle();

const intructionsTitle = () => {
  term.red();
  console.log('      ___           _                   _   _   ');
  console.log('     |_ _|_ __  ___| |_ _ __ _   _  ___| |_\(_\) ___ _ __  ___');
  console.log('      | || \'_ \\/ __| __| \'__| | | |/ __| __| |/ _ \| \'_ \\/ __|');
  console.log('      | || | | \\__ \\ |_| |  | |_| | \(__| |_| | \(_\) | | | \\__ \\');
  console.log('     |___|_| |_|___/\\__|_|   \\__,_|\\___|\\__|_|\\___/|_| |_|___/');
}
intructionsTitle();

const mainMenuFrog = () => {
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
mainMenuFrog();

const frogKingDesign = () => {
  term.green();
  console.log('               o  o   o  o');
  console.log('               |\\/ \\^/ \\/|');
  console.log('               |,-------.|');
  console.log('             ,-.(|)   (|),-.');
  console.log('             \\_*._ \' \'_.* _/');
  console.log('              /`-.`--\' .-\'\\');
  console.log('         ,--./    `---\'    \\,--.');
  console.log('          \\   |(  )     (  )|   /');
  console.log('           \\  | ||       || |  /');
  console.log('            \\ | /|\\     /|\\ | /');
  console.log('           /  \\-._     _,-/  \\');
  console.log('          //| \\\\  `---\'  // |\\\\');
  console.log('         /,-.,-.\\       /,-.,-.\\');
  console.log('        o   o   o      o   o    o');
};
frogKingDesign();

const frogsDesign = () => {
  term.green();
  console.log('                     _         _');
  console.log('         __   ___.--\'_`.     .\'_`--.___   __');
  console.log('        \( _`.\'. -   \'o` \)   \( \'o`   - .`.\'_ \)');
  console.log('        _\\.\'_\'      _.-\'     `-._      `_`./_');
  console.log('        \( \\`. \)    //\\`         \'/\\\    \( .\'/ \)');
  console.log('         \\_`-\'`---\'\\\__,       ,__//`---\'`-\'_/');
  console.log('          \\`        `-\\         /-\'        \'/');
  console.log('           `                               \'');
};
frogsDesign();

module.exports = {
  mainMenuTitle: mainMenuTitle,
  topScorersTitle: topScorersTitle,
  intructionsTitle: intructionsTitle,
  mainMenuFrog: mainMenuFrog,
  frogKingDesign: frogKingDesign,
  frogsDesign: frogsDesign
};

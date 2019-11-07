const term = require('terminal-kit').terminal;
const topScores = require('./topScores.js');

const mainMenuTitle = () => {
  term.red();
  console.log('      ____');
  console.log('     |  ___| __ ___   __ _  __ _  ___ _ __ ');
  console.log('     | |_ | \'__/ _ \\ / _` |/ _` |/ _ \\ \'__|');
  console.log('     |  _|| | | \(_\) | \(_| | \(_| |  __/ |');
  console.log('     |_|  |_|  \\___/ \\__, |\\__, |\\___|_|   ');
  console.log('                     |___/ |___/ ');
  console.log('\n');
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

const topScorers = () => {
  term.red();
  console.log('      _____             ____');
  console.log('     |_   _|__  _ __   / ___|  ___ ___  _ __ ___ _ __ ___');
  console.log('       | |/ _ \\| \'_ \\  \\___ \\ / __/ _ \\| \'__/ _ \\ \'__/ __|');
  console.log('       | | \(_\) | |_\) |  ___\) | \(_| \(_\) | | |  __/ |  \\__ \\');
  console.log('       |_|\\___/| .__/  |____/ \\___\\___/|_|  \\___|_|  |___/');
  console.log('                |_|');
  console.log('\n');
  term.green();
  console.log('                          o  o   o  o');
  console.log('                          |\\/ \\^/ \\/|');
  console.log('                          |,-------.|');
  console.log('                        ,-.(|)   (|),-.');
  console.log('                        \\_*._ \' \'_.* _/');
  console.log('                          `-.`--\' .-\'');
  console.log('                             `---\'   ');
  term.white();
  topScores.statGen();
  console.log('\n');
  term.yellow();
  console.log(`  Press "p" if you want to start the game and "q" if you want to quit.`);
};


const help = () => {
  term.red();
  console.log('        ___           _                   _   _   ');
  console.log('       |_ _|_ __  ___| |_ _ __ _   _  ___| |_\(_\) ___  _ __  ___');
  console.log('        | || \'_ \\/ __| __| \'__| | | |/ __| __| |/ _ \\| \'_ \\/ __|');
  console.log('        | || | | \\__ \\ |_| |  | |_| | \(__| |_| | \(_\) | | | \\__ \\');
  console.log('       |___|_| |_|___/\\__|_|   \\__,_|\\___|\\__|_|\\___/|_| |_|___/');
  term.green();
  console.log('                              _         _');
  console.log('                  __   ___.--\'_`.     .\'_`--.___   __');
  console.log('                 \( _`.\'. -   \'o` \)   \( \'o`   - .`.\'_ \)');
  console.log('                 _\\.\'_\'      _.-\'     `-._      `_`./_');
  console.log('                 \( \\`. \)    //\\`         \'/\\\    \( .\'/ \)');
  console.log('                  \\_`-\'`---\'\\\__,       ,__//`---\'`-\'_/');
  console.log('                   \\`        `-\\         /-\'        \'/');
  console.log('                    `                               \'');
  term.white();
  console.log('  In this game you have 4 frogs. To finish a level you have to lead all of them' + ('\n') + '  towards the end points. End points are marked with the "F", "L", "O" and "W"' + ('\n') + '  letters. Use the "W" key to move up, "S" to move down, "A" to move left and' + ('\n') + '  "D" to move right. You have 60 seconds to finish the task and the goal is' + ('\n') + '  to be as quick as possible. Don\'t let cars to hit you on the road and avoid' + ('\n') + '  drowning in the river by using the tree logs when crossing it.');
  console.log('\n');
  term.yellow();
  console.log(`  Press "p" if you want to start the game and "q" if you want to quit.`);
};

module.exports = {
  mainMenuTitle: mainMenuTitle,
  topScorers: topScorers,
  help: help
};
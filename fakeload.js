const chalk = require('chalk');
const colors = require('colors');
let time = 0;
const term = require('terminal-kit').terminal;

const fakeLoad = () => {
  if (time <= 300.00) {
    term.clear();
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('             loading...'.green);
    console.log('          ¤'.green);
    time += 1;
  }
  if (time > 300.00 && time <= 800) {
    term.clear();
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('             loading...'.green);
    console.log('          ¤¤¤'.green);
    time += 1;
  }
  if (time > 800.00 && time <= 1000.00) {
    term.clear();
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('             loading...'.green);
    console.log('          ¤¤¤¤¤'.green);
    time += 1;
  }
  if (time > 1000.00 && time <= 1200.00) {
    term.clear();
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('');

    console.log('             loading...'.green);
    console.log('          ¤¤¤¤¤¤¤'.green);
    time += 1;
  }
  if (time > 1200.00 && time <= 3000.00) {
    term.clear();
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('             loading...'.green);
    console.log('          ¤¤¤¤¤¤¤¤¤'.green);
    time += 1;
  }
  if (time > 3000.00 && time <= 4000.00) {
    term.clear();
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('             loading...'.green);
    console.log('          ¤¤¤¤¤¤¤¤¤¤¤¤'.green);
    time += 1;
  }
  if (time > 4000.00 && time <= 5000.00) {
    term.clear();
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('             loading...'.green);
    console.log('          ¤¤¤¤¤¤¤¤¤¤¤¤¤'.green);
    time += 1;
    console.clear();
  }
  if (time > 5000.00 && time <= 6000.00) {
    term.clear();
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('             loading...'.green);
    console.log('          ¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤'.green);
    time += 1;
    console.clear();
  }
  if (time > 6000.00 && time <= 6500.00) {
    term.clear();
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('             loading...'.green);
    console.log('          ¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤'.green);
    time += 10;
    console.clear();
  }
  setTimeout(() => { fakeLoad(); }, 20);
};

module.exports = {
  fakeLoad: fakeLoad
};
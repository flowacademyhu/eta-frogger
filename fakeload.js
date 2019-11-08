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
    console.log('             loading...');
    console.log('          ¤');
    time += 0.25;
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
    console.log('             loading...');
    console.log('          ¤¤¤');
    time += 0.25;
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
    console.log('             loading...');
    console.log('          ¤¤¤¤¤');
    time += 0.25;
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

    console.log('             loading...');
    console.log('          ¤¤¤¤¤¤¤¤');
    time += 0.25;
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
    console.log('             loading...');
    console.log('          ¤¤¤¤¤¤¤¤¤¤¤');
    time += 0.25;
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
    console.log('             loading...');
    console.log('          ¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤');
    time += 0.25;
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
    console.log('             loading...');
    console.log('          ¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤');
    time += 0.25;
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
    console.log('             loading...');
    console.log('          ¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤');
    time += 0.25;
    console.clear();
  }
  if (time > 6000.00 && time <= 7500.00) {
    term.clear();
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('             loading...');
    console.log('          ¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤');
    time += 0.25;
    console.clear();
  }
    if (time > 7500.00 && time <= 9500.00) {
    term.clear();
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('             loading...');
    console.log('          ¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤');
    time += 0.25;
    console.clear();
  }
  if (time > 9500.00 && time <= 10000.00) {
    term.clear();
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('             loading...');
    console.log('          ¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤¤');
    time += 0.25;
    console.clear();
  }



  setTimeout(() => { fakeLoad(); }, 2);
};

//console.log(fakeLoad());

module.exports = {
  fakeLoad: fakeLoad
};

// Math.floor(Math.random() * 2

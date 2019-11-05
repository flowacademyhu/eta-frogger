const fs = require('fs');

const leaderBoard = {
  Klaudia: 39,
  Isti: 17,
  Peti: 15,
  Máté: 19,
  Smeagol: 30
};

const jsonBoard = JSON.stringify(leaderBoard);

const save = () => {
  fs.writeFile('./result.json', jsonBoard, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Saving was succesful');
  });
};

const statGen = () => {
  const result = fs.readFileSync('./result.json', 'utf8');
  const topR = JSON.parse(result);
  let first = 0;
  let second = 0;
  let third = 0;
  let firstRacer;
  let secondRacer;
  let thirdRacer;
  for (let x in topR) {
    if (topR[x] > first) {
      third = second;
      second = first;
      first = topR[x];
      firstRacer = x;
    } else if (topR[x] > second) {
      third = second;
      second = topR[x];
      secondRacer = x;
    } else if (topR[x] > third) {
      third = topR[x];
      thirdRacer = x;
    }
  }
  console.log(`${firstRacer} : ${first} \n ${secondRacer} : ${second} \n ${thirdRacer} : ${third}`);
};

module.exports = {
  save: save,
  statGen: statGen
};

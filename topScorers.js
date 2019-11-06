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
<<<<<<< HEAD
// Path néven majd változtatni kell!!!!!
=======
>>>>>>> e0700dd8a932f683dc2ba44ac9cb86ace793c285
  fs.writeFile('./result.json', jsonBoard, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Saving was succesful');
  });
};

const statGen = () => {
<<<<<<< HEAD
  const fileLoader = () => {
    const result = fs.readFileSync('./result.json', 'utf8');
    return result;
  }

  fileLoader();

  const topR = JSON.parse(result);

  const topRacers = (object) => {
    let first = 0;
    let second = 0;
    let third = 0;
    let firstRacer;
    let secondRacer;
    let thirdRacer;
    for (const x in object) {
      if (object[x] > first) {
        third = second;
        second = first;
        first = object[x];
        firstRacer = x;
      } else if (object[x] > second) {
        third = second;
        second = object[x];
        secondRacer = x;
      } else if (object[x] > third) {
        third = object[x];
        thirdRacer = x;
      }
=======
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
>>>>>>> e0700dd8a932f683dc2ba44ac9cb86ace793c285
    }
    console.log(`${firstRacer} : ${first} \n ${secondRacer} : ${second} \n ${thirdRacer} : ${third}`);
  };
  topRacers(topR);
};

module.exports = {
  save: save,
  statGen: statGen
};

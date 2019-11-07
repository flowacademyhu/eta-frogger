const readLine = require('readline-sync');
const fs = require('fs');

const leaderBoard = {
  Klaudia: 39,
  Isti: 17,
  Peti: 15,
  Máté: 19,
  Smeagol: 30
};

const save = (obj, user, point) => {
  obj[user] = point;
  let jsonBoard = JSON.stringify(obj);
  fs.writeFile('./result.json', jsonBoard, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Saving was succesful');
  });
};

/* let userName = readLine.question('Please give me your username: ');
let point = 50;

save(leaderBoard, userName, point);    */

let jsonResult = fs.readFileSync('./result.json', 'utf8');
let result = JSON.parse(jsonResult); 
console.log(result);


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
  console.log(`\n ${firstRacer} : ${first} \n ${secondRacer} : ${second} \n ${thirdRacer} : ${third}`);
};

module.exports = {
  //save: save
  statGen: statGen
};

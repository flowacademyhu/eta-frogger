let chalk = require('chalk');

//FROG
const frogGraphics = () =>{
result = '@'
return chalk.green.bgHex('#193300').bold(result);
};
console.log(frogGraphics() + ' ===>  Breki');

//WOODS 3
const woods3 = () => {
  let wood = [];
  for (let i = 0; i < 3 ; i++){
    wood.push('w');
  }
  let res = wood.join("");
  return chalk.rgb(205,133,63).bgHex('#FFE5CC').bold(res);
};
console.log(woods3() + ' woods3');
console.log();

//WOODS 5
const woods5 = () => {
  let wood = [];
  for (let i = 0; i < 5 ; i++){
    wood.push('w');
  }
  let res = wood.join("");

  return chalk.rgb(205,133,63).bgHex('#FFE5CC').bold(res);
};
console.log(woods5() + ' woods3');
console.log();


//TURTLE 3
const turtle3 = () => {
  let  turtle = [];
  for (let i = 0; i < 3 ; i++){
    if(turtle[1] === 't'){
    turtle.push('o');
    } else{
    turtle.push('t');
    }
  }
  let res = turtle.join("");
  return chalk.black.bgWhite.bold(res);
};
console.log(turtle3() + ' turtle3 balról jobbra');
console.log();


const turtle3R = () => {
    let  turtle = [];
    for (let i = 0; i < 3 ; i++){
      if(turtle[0] !== 'o'){
      turtle.push('o');
      } else{
      turtle.push('t');
      }
    }
    let res = turtle.join("");
    return chalk.black.bgWhite.bold(res);
  };
  console.log(turtle3R() + ' turtle3 jobbról balra');
  console.log();

//TURTLE4
const turtle4 = () => {
  let  turtle = [];
  for (let i = 0; i < 4 ; i++){
    if(turtle[2] === 't'){
    turtle.push('o');
    } else{
    turtle.push('t');
    }
  }
  let res = turtle.join("");
  return chalk.black.bgWhite.bold(res);
};
console.log(turtle4() + ' turtle4  balról jobbra');
console.log();

const turtle4R = () => {
  let  turtle = [];
  for (let i = 0; i < 4 ; i++){
    if(turtle[0] !== 'o'){
    turtle.push('o');
    } else{
    turtle.push('t');
    }
  }
  let res = turtle.join("");
  return chalk.black.bgWhite.bold(res);
};
console.log(turtle4R() + ' turtle4  balról jobbra');
console.log();


//CAR 1
const car1 = () => {
  let  car = [];
  for (let i = 0; i < 1 ; i++){
  car.push('<');
  car.push('>');
  }
  let res = car.join("");
  return chalk.yellow.bgBlue.bold(res);
};
console.log(car1() + ' Car1 ');
console.log();

//CAR 2
const car2 = () => {
  let  car = [];
  for (let i = 0; i < 1 ; i++){
  car.push('<');
  car.push('>');
  }
  car.push('>');
  let res = car.join("");
  return chalk.yellow.bgBlue.bold(res);
};
console.log(car2() + ' Car2 balról jobbra ');
console.log();

//CAR 2 REVERSE
const car2R = () => {
  let  car = [];
  for (let i = 0; i < 2 ; i++){
  car.push('<');
  
  }
  car.push('>');
  let res = car.join("");
  return chalk.yellow.bgBlue.bold(res);
};
console.log(car2R() + ' Car2 jobbról balra ');
console.log();

module.exports = {
  frogGraphics: frogGraphics,
  woods3: woods3,
  woods5: woods5,
  turtle3: turtle3,
  turtle3R: turtle3R,
  turtle4: turtle4,
  turtle4R: turtle4R,
  car1: car1,
  car2: car2,
  car2R: car2R
};



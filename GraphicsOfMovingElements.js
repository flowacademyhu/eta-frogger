const frogGraphics = () =>{
let frog = [];
for(let i = 0; i < 2; i++){
  frog[i] = "@@";   
    for(let j = 1; j < 2; j++){
    frog[j] = "||";
  }
}
let result = frog.join("\n");

return result;
};
console.log(frogGraphics() + ' ===>  Breki');

//WOODS 7
const woods7 = () => {
  let wood = [];

  for(let i = 0; i < 2; i++){
    wood[i] = " ______________";   
      for(let j = 1; j < 2; j++){
      wood[j] = "(______________)";
    }
  }
  let result = wood.join("\n");
  
  return result;
};
console.log(woods7() + ' woods 7');

//WOODS 10
const woods10 = () => {
  let wood = [];

  for(let i = 0; i < 2; i++){
    wood[i] = " __________";   
      for(let j = 1; j < 2; j++){
      wood[j] = "(__________)";
    }
  }
  let result = wood.join("\n");
  
  return result;
};
console.log(woods10() + ' woods 5');

//WOODS 3
const woods3 = () => {
  let wood = [];

  for(let i = 0; i < 2; i++){
    wood[i] = " ______";   
      for(let j = 1; j < 2; j++){
      wood[j] = "(______)";
    }
  }
  let result = wood.join("\n");
  
  return result;
};
console.log(woods3() + ' woods 3');

console.log();

//TURTLE 3
const turtle3 = () => {
  let  turtle = [];

  for(let i = 0; i < 2; i++){
    turtle[i] = "¤¤¤¤¤¤";   
      for(let j = 1; j < 2; j++){
      turtle[j] = "******";
    }
  }
  let result = turtle.join("\n");
  
  return result;
};
console.log(turtle3() + ' turtle 3');

console.log();

//TURTLE 2
const turtle2 = () => {
  let  turtle = [];

  for(let i = 0; i < 2; i++){
    turtle[i] = "¤¤¤¤";   
      for(let j = 1; j < 2; j++){
      turtle[j] = "¤¤¤¤";
    }
  }
  let result = turtle.join("\n");
  
  return result;
};
console.log(turtle2() + ' turtle 2');
console.log();

//CAR 1
const car1 = () => {
  let  car = [];

  for(let i = 0; i < 2; i++){
    car[i] = "1111";   
      for(let j = 1; j < 2; j++){
        car[j] = "1111";
    }
  }
  let result = car.join("\n");
  
  return result;
};
console.log(car1() + ' car 1');
console.log();

//CAR 2
const car2 = () => {
  let  car = [];

  for(let i = 0; i < 2; i++){
    car[i] = "2222";   
      for(let j = 1; j < 2; j++){
        car[j] = "2222";
    }
  }
  let result = car.join("\n");
  
  return result;
};
console.log(car2() + ' car 2');
console.log();
//CAR 3
const car3 = () => {
  let  car = [];

  for(let i = 0; i < 2; i++){
    car[i] = "3333";   
      for(let j = 1; j < 2; j++){
        car[j] = "3333";
    }
  }
  let result = car.join("\n");
  
  return result;
};
console.log(car3() + ' car 3');
console.log();

//CAR 4
const car4 = () => {
  let  car = [];

  for(let i = 0; i < 2; i++){
    car[i] = "4444";   
      for(let j = 1; j < 2; j++){
        car[j] = "4444";
    }
  }
  let result = car.join("\n");
  
  return result;
};
console.log(car4() + ' car 4');

console.log();

//TRUCK 3
const truck3 = () => {
  let  truck = [];

  for(let i = 0; i < 2; i++){
    truck[i] = "TTTTTT";   
      for(let j = 1; j < 2; j++){
        truck[j] = "TTTTTT";
    }
  }
  let result = truck.join("\n");
  
  return result;
};
console.log(truck3() + ' TRUCK 3');
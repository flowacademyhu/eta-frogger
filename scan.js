/*
végigmegy a pályán, és megnézi, hogy a gékát elótötte-e valami,
vagy beleesett-e a folyóba. Ezekben az esetekben halál van.
Azt is nézi, hogy beért-e a béka a célba.
*/
let input = require('./logic2');


const restartGame = () =>{
  input.matrixGenerator();
  input.frogCoordinator();
};
const matrixScan = (map) => {
  for (var i = 0; i < input.map; i++) {
    for (var j = 0; j < input.map; j++) {
      if (input.map[i][j] === 3 || input.map[i][j] === 5 || input.map[i][j] === 7 || input.map[i][j] === 9) {
        restartGame();
      }
      if (map[i][j] === 0) {
        restartGame();
      }
    }
  }
};
matrixScan(input.map);


//input.map --> szükség lesz a tömbünk hosszára

const finish = (map) => {
  for(let i = 0; i < input.map; i++){
    if( input.map[8] === '@' ){ 
      input.map[8] = 'F';
    }
    if(input.map[16] === '@'){
      input.map[16] = 'L';
    }
    if(input.map[16] === '@'){
      input.map[16] = 'O';
    }
    if(input.map[16] === '@'){
      input.map[16] = 'W';
    }

  }
};
finish();

module.exports = {
restartGame: restartGame,
finish: finish
};

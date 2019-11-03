/*
végigmegy a pályán, és megnézi, hogy a gékát elótötte-e valami,
vagy beleesett-e a folyóba. Ezekben az esetekben halál van.
Azt is nézi, hogy beért-e a béka a célba.
*/

const matrixScan = (map) => {
  for (var i = 0; i < map.length; i++) {
    for (var j = 0; j < map.length; j++) {
      if (map[i][j] === 3 && map[i][j] === 5 && map[i][j] === 7 && map[i][j] === 9) {
        // halál
      }
      if (map[i][j] === 0) {
        // repeat + score
      }
    }
  }
  return matrix;
};

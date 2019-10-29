//Generál egy megadott sor és oszlopszámú mátrixot és feltölti a megadott fillerrel
const matrixGenerator = (row, col, filler) => {
  const matrix = [];
  for (let i = 0; i < row; i++) {
    matrix[i] = [];
    for (let j = 0; j < col; j++) {
      matrix[i][j] = filler;
    }
  }
  return matrix;
};

const map = matrixGenerator(14, 25, 0);
console.log(map);

module.exports = {
  matrixGenerator: matrixGenerator
};

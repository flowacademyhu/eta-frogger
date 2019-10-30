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

const map = matrixGenerator(9, 25, 0);

let i = 0;
let k = 0;
let j = 25;
let l = 25;

const car = (array, speed) => {
  array[i] = '<';
  array[i + 1] = '>';
  i += 1;
  array[k - 1] = 0;
  k += 1;
  if (i === (26)) {
    i = 0;
    k = i;
  }
  console.clear();
  setTimeout(() => { car(array, speed); }, speed);
  console.log(array.slice(0, (25)));
  return array;
}; 

//car(map[0], 500);

const carReverse = (array, speed) => {
  array[j] = '>';
  array[j - 1] = '<';
  j -= 1;
  array[l + 1] = 0;
  l -= 1;
  if (j === 0) {
    j = 25;
    l = j;
  }
  console.clear();
  setTimeout(() => { carReverse(array, speed); }, speed);
  console.log(array.slice(2, 27));
  return array;
}; 

//carReverse(map[1], 500);

const truck = (array, speed) => {
  array[i] = '<';
  array[i + 1] = '>';
  array[i + 2] = '>';
  i += 1;
  array[k - 1] = 0;
  k += 1;
  if (i === 26) {
    i = 0;
    k = i;
  }
  console.clear();
  setTimeout(() => { truck(array, speed); }, speed);
  console.log(array.slice(0, 25));
  return array;
}; 

//truck(map[2], 500);

const truckReverse = (array, speed) => {
  array[j] = '>';
  array[j - 1] = '<';
  array[j - 2] = '<';
  j -= 1;
  array[l + 1] = 0;
  l -= 1;
  if (j === 0) {
    j = 26;
    l = j;
  }
  console.clear();
  setTimeout(() => { truckReverse(array, speed); }, speed);
  console.log(array.slice(2, 27));
  return array;
};

//truckReverse(map[3], 500);

const woodShort = (array, speed) => {
  array[i] = 'w';
  array[i + 1] = 'w';
  array[i + 2] = 'w';
  i += 1;
  array[k - 1] = 0;
  k += 1;
  if (i === 26) {
    i = 0;
    k = i;
  }
  console.clear();
  setTimeout(() => { woodShort(array, speed); }, speed);
  console.log(array.slice(0, 25));
  return array;
}; 

//woodShort(map[4], 500);

const woodLong = (array, speed) => {
  array[i] = 'w';
  array[i + 1] = 'w';
  array[i + 2] = 'w';
  array[i + 3] = 'w';
  array[i + 4] = 'w';
  i += 1;
  array[k - 1] = 0;
  k += 1;
  if (i === 26) {
    i = 0;
    k = i;
  }
  console.clear();
  setTimeout(() => { woodLong(array, speed); }, speed);
  console.log(array.slice(0, 25));
  return array;
}; 

//woodLong(map[5], 500);

const woodLongReverse = (array, speed) => {
  array[j] = 'w';
  array[j - 1] = 'w';
  array[j - 2] = 'w';
  array[j - 3] = 'w';
  array[j - 4] = 'w';
  j -= 1;
  array[l + 1] = 0;
  l -= 1;
  if (j === 0) {
    j = 26;
    l = j;
  }
  console.clear();
  setTimeout(() => { woodLongReverse(array, speed); }, speed);
  console.log(array.slice(2, 27));
  return array;
};

//woodLongReverse(map[6], 500);

const turtleShortReverese = (array, speed) => {
  array[j] = 'o';
  array[j - 1] = 'o';
  array[j - 2] = 'o';
  j -= 1;
  array[l + 1] = 0;
  l -= 1;
  if (j === 0) {
    j = 26;
    l = j;
  }
  console.clear();
  setTimeout(() => { turtleShortReverese(array, speed); }, speed);
  console.log(array.slice(2, 27));
  return array;
};

//turtleShortReverese(map[7], 500);


const turtleLongReverese = (array, speed) => {
  array[j] = 'o';
  array[j - 1] = 'o';
  array[j - 2] = 'o';
  array[j - 3] = 'o';
  j -= 1;
  array[l + 1] = 0;
  l -= 1;
  if (j === 0) {
    j = 26;
    l = j;
  }
  console.clear();
  setTimeout(() => { turtleLongReverese(array, speed); }, speed);
  console.log(array.slice(2, 27));
  return array;
}; 

//turtleLongReverese(map[8], 500);

module.exports = {
  car: car,
  carReverse: carReverse,
  truck: truck,
  truckReverse: truckReverse,
  woodShort: woodShort,
  woodLong: woodLong,
  woodLongReverse: woodLongReverse,
  turtleShortReverese: turtleShortReverese,
  turtleLongReverese: turtleLongReverese
};
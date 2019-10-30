const tomb = [];

for (let i = 0; i < 17; i++) {
  tomb.push(0);
}

let i = 0;
let k = 0;
let counter = 0;

const step = (b, speed) => {


  tomb[i] = '<';
  tomb[i + 1] = '>';
  tomb[i + 2] = '>';

  i += 1;
  tomb[k - 1] = 0;

  k += 1;

  if (i === (b + 1)) {
    i = 0;
    k = i;
    counter += 1;
  }
  console.clear();
  setTimeout(() => { step(b, speed); }, speed);
  console.log(tomb.slice(0, (b)));
  console.log(counter);
};

console.log(step(17, 500));

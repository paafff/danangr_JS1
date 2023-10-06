// Contoh program dengan if-else dan nested if
console.log('program if-else');
const nilai = 35;

if (nilai >= 80) {
  console.log('Nilai A');
} else if (nilai >= 70) {
  console.log('Nilai B');
} else {
  console.log('Nilai C');
}

// Contoh program dengan switch case
console.log('====================================');
console.log('program switch-case');
const day = 'Monday';

switch (day) {
  case 'Monday':
    console.log('Today is Monday');
    break;
  case 'Tuesday':
    console.log('Today is Tuesday');
    break;
  default:
    console.log('Unknown day');
}

// Contoh program dengan for statement
console.log('====================================');
console.log('program for statement');
for (let i = 0; i < 9; i++) {
  console.log('perulangan:', i);
}

// Contoh program dengan while loop
console.log('====================================');
console.log('program while loop');
let While = 0;
while (While < 9) {
  console.log('perulangan:', While);
  While++;
}

// Contoh program dengan do-while loop
console.log('====================================');
console.log('program do-while loop');
let doWhile = 0;
do {
  console.log('perulangan:', doWhile);
  doWhile++;
} while (doWhile < 9);

// Contoh program dengan function
console.log('====================================');
console.log('program function loop');
const hallo = (name) => {
  return 'Halloooo, ' + name + '!';
};

const halloJohn = hallo('John');
console.log(halloJohn);

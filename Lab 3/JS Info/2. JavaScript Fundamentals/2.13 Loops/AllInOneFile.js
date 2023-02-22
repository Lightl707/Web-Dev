//1.Last loop value
let i = 3;

while (i) {
  alert( i-- );
}
//answer: 1

//2.Which values does the while loop show?
// let i = 0; 
// while (++i < 5) alert( i ); // 1, 2, 3, 4

// let i = 0;
// while (i++ < 5) alert( i );  // 1, 2, 3, 4, 5

//3.Which values get shown by the "for" loop?
for (let i = 0; i < 5; i++) alert( i ); //0, 1, 2, 3, 4
for (let i = 0; i < 5; ++i) alert( i ); //0, 1, 2, 3, 4

//4.Output even numbers in the loop
for(let i = 2; i <= 10; i += 2) alert(i);

//5.Replace "for" with "while"
for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
}

// let i = 0;
// while(i < 3) {
//     alert( `number ${i}!` );
//     i++;
// }

//6.Repeat until the input is correct
let num;
do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

//7.Output prime numbers
let maxValue = 10;
numbers:
for (let i = 2; i <= maxValue; i++) {
  for (let j = 2; j <= i**(0.5); j++) {
    if(i % j == 0) continue numbers;
  }
  alert(i);
}

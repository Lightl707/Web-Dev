// //1. No difference
// // function checkAge(age) {
// //     if (age > 18) {
// //       return true;
// //     } else {
// //       // ...
// //       return confirm('Did parents allow you?');
// //     }
// // }
  
// //   function checkAge(age) {
// //     if (age > 18) {
// //       return true;
// //     }
// //     // ...
// //     return confirm('Did parents allow you?');
// // }

// //2
// // function checkAge(age) {
// //     if (age > 18) {
// //       return true;
// //     } else {
// //       return confirm('Did parents allow you?');
// // }
  
// function checkAge(age) {
// //   1. return age > 18 ? true : confirm('Did parents allow you?');
// //   2. return age > 18 || confirm('Did parents allow you?');
// }

// //3
// function min(a, b) {
//     return a > b ? b : a;
// }

//4
function pow(x, n) {
    let ans = x;
    for (let i = 1; i < n; i++) ans *= x;
    return ans;
}

let x = prompt("x?", '');
let n = prompt("n?", '');
n < 1 ? alert("Error power!") : alert(pow(x, n));
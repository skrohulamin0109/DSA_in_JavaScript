// for(let i =0; i<4; i++){
//   let row = '';
//   for (let j=0; j<4; j++){
//     row += '*';
//   }
//   console.log(row);
// }

// for(let i =0; i<=4; i++){
//   for (let j = 0; j<=i; j++){
//     process.stdout.write('*');
//   }
//   console.log();
// }

// for (let i = 1; i <= 5; i++){
//   for (let j = 1; j <= i; j++){
//     process.stdout.write(String(j));
//   }
//   console.log();
// }

// for (let i = 1; i <= 5; i++){
//   for (let j = 1; j <= i; j++){
//     process.stdout.write(String(i));
//   }
//   console.log();
// }

// for (let i = 1; i <= 5; i++){
//   for (let j = 1; j <= 5 - i + 1; j++){
//     process.stdout.write('*');
//   }
//   console.log();
// }

//   for (let i = 1; i <= 5; i++){
//   for (let j = 1; j <= 5 - i + 1; j++){
//     process.stdout.write(String(j));
//   }
//   console.log();
// }

//   for (let i = 1; i <= 5; i++){
//   for (let j = 1; j <= 2*i - 1; j++){
//     process.stdout.write('*');
//   }
//   console.log();
// }

//   for (let i = 1; i <= 5; i++){
//   for (let j = 1; j < 5 - i + 1; j++){
//     process.stdout.write(' ');
//   }

//   for (let k = 1; k <= 2*i - 1; k++){
//     process.stdout.write("*");
//   }
//   for(let m = 1; m < 5 - i + 1; m++){
//     process.stdout.write(' ')
//   }
//   console.log();
// }

// for (let i = 0; i < 5; i++){
//   for (let j = 0; j < i; j++){
//     process.stdout.write(' ');
//   }

//   for (let k = 0; k <= 2*5 - 2*i - 2; k++){
//     process.stdout.write("*");
//   }
//   for(let m = 0; m < i ; m++){
//     process.stdout.write(' ')
//   }
//   console.log();
// }

// let n = 5;

// for (let i = 0; i < 2 * n - 1; i++) {

//     let stars;

//     if (i < n){
//       stars = i;
//     } else {
//       stars = 2*n - i - 2;
//     }

//     for (let j = 0; j <= stars; j++){
//       process.stdout.write("*")
//     }

//     console.log();

//     // // if(i < n){
//     // //   for (let k = 0; k <= i; k++) {
//     // //       process.stdout.write("*");
//     // //   }
//     // //   console.log();
//     // // } else{
//     // //   for (let j = 0; j < 2*n - i - 1; j++) {
//     // //     process.stdout.write("*");
//     // //   }
//     // //   console.log();
//     // // }
// }

// let start;

// for (let i =1; i <= 5; i++){
//   start = (i % 2 !== 0) ? 1 : 0;
//   for (let j = 1; j <= i; j++){
//     process.stdout.write(String(start));
//     // start = 1 - start;
//     start = (start == 0) ? 1 : 0;
//   }
//   console.log();
// }

// for(let i = 1; i <= 5; i++){
//   for (let j = 1; j < i; j++){
//     process.stdout.write(String(j));
//   }

//   for (let k = 0; k <= 2*(4 - i); k++){
//     process.stdout.write(' ');
//   }

//   for (let l = 1; l < i; l++){
//     process.stdout.write(String(i - l));
//   }
//   console.log();
// }

// let num = 1;
// for (i = 1; i <= 5; i++) {
//     for (j = 1; j <= i; j++) {
//         process.stdout.write(String(num));
//         num ++;
//     }
//     console.log();
// }

// for (let i = 1; i <= 5; i++){
//   // let line = "";
//   let alphCode = 'A'.charCodeAt(0)           // 0 is the index here.
//   for(let j = 1; j <= i; j++){
//     process.stdout.write(String.fromCharCode(alphCode + j - 1))
//   }
//   console.log();
// }

// for (let i = 0; i <= 5; i++){
//   let alphCode = 'A'.charCodeAt(0)
//   for(let j = 1; j <= 5 - i; j++){
//     process.stdout.write(String.fromCharCode(alphCode + j - 1))
//   }
//   console.log();
// }

// let alphCode = 'A'.charCodeAt(0);
// for (let i=1; i <= 5; i++ ){
//   for(let j=0; j< i; j++){
//     process.stdout.write(String.fromCharCode(alphCode));
//   }
//   alphCode++;
//   console.log();
// }

// const n = 5;

// for (let i = 0; i < n; i++) {
//   const base = 'A'.charCodeAt(0);

//   for (let s = 0; s < n - i - 1; s++) {
//     process.stdout.write(" ");
//   }

// for (let j = 0; j <= i; j++) {
//     process.stdout.write(String.fromCharCode(base + j));
//   }

// for (let j = i - 1; j >= 0; j--) {
//     process.stdout.write(String.fromCharCode(base + j));
//   }

//   console.log();
// }

// for (let i = 0; i < 5; i++) {
//     cdFrA = "A".charCodeAt(0);

//     for (let j = 0; j <= 5 - i; j++) {
//         process.stdout.write(" ");
//     }

//     for (let k = 0; k <= i; k++) {
//         process.stdout.write(String.fromCharCode(cdFrA + k));
//       }

//       for(let l = i - 1; l >= 0; l -- ){
//       process.stdout.write(String.fromCharCode(cdFrA + l));
//     }

//     console.log();
// }

// for (let i = 1; i <= 5; i++) {
//     for (let j = 0; j <= 5 - i; j++) {
//         process.stdout.write(" ");
//     }

//     let cdFrA = "A".charCodeAt(0);
//     let num = 0;

//     for (let j = 0; j < 2 * i - 1; j++) {
//         if (j < i) {
//             num++;
//         } else {
//             num--;
//         }

//         process.stdout.write(String.fromCharCode(cdFrA + num - 1));
//     }
//     console.log();
// }

// let n = 4;
//  for (let i = 0; i <= n; i++){
//     let num = n - i;
//     let baseCh = 'A'.charCodeAt(0);
//     for(let j = 0; j <= i; j++){
//         process.stdout.write(String.fromCharCode(baseCh + num));
//         num++;
//     }
//     console.log();
//  }

// for(let i = 1; i <= 5; i++ ){
//     for(let j = 1; j <= 5 - i +1; j++){
//         process.stdout.write('*')
//     }

//     for(let k = 1; k <= i*2 -2; k++){
//         process.stdout.write(' ')
//     }

//     for(let j = 1; j <= 5 - i +1; j++){
//         process.stdout.write('*')
//     }

//     console.log();
// }

// for(let i = 1; i <= 5; i++ ){
//     for(let j = 1; j <= i ; j++){
//         process.stdout.write('*')
//     }

//     for(let k = 1; k <= (5 - i)*2; k++){
//         process.stdout.write(' ')
//     }

//     for(let j = 1; j <= i; j++){
//         process.stdout.write('*')
//     }

//     console.log();
// }

// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write("*");
//     }
//     for (let j = 1; j <= (5 - i) * 2; j++) {
//         process.stdout.write(" ");
//     }
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write("*");
//     }

//     console.log();
// }

// for (let i = 1; i <= 4; i++) {
//     for (let j = 1; j <= 4 - i + 1; j++) {
//         process.stdout.write("*");
//     }
//     for (let j = 1; j <= i * 2; j++) {
//         process.stdout.write(" ");
//     }
//     for (let j = 1; j <= 4 - i + 1; j++) {
//         process.stdout.write("*");
//     }

//     console.log();
// }

// let n = 5;

// for (let i = 1; i <= 2 * n - 1; i++) {
//     let stars;
//     let spaces;
//     if (i <= n) {
//         stars = i;
//         spaces = (5 - i) * 2;
//     } else if (i > n || i <= 2 * n - 1) {
//         stars = n * 2 - i;
//         spaces = (i - n) * 2;
//     }

//     for (let j = 1; j <= stars; j++) {
//         process.stdout.write("*");
//     }
//     for (let j = 1; j <= spaces; j++) {
//         process.stdout.write(" ");
//     }
//     for (let j = 1; j <= stars; j++) {
//         process.stdout.write("*");
//     }

//     console.log();
// }

// let n = 7;

// for (let i = 1; i <= n; i++) {
//     if (i == 1 || i == n) {
//         for (let j = 1; j <= n - 1; j++) {
//             process.stdout.write("*");
//         }
//     } else {
//         for (let k = 1; k <= 1; k++) {
//             process.stdout.write("*");
//         }

//         for (let l = 1; l <= n - 3; l++) {
//             process.stdout.write(" ");
//         }

//         for (let k = 1; k <= 1; k++) {
//             process.stdout.write("*");
//         }
//     }
//     console.log();
// }

let n = 4;

for (let i = 1; i <= 2*n - 1; i++){
for (let j = 1; j <= 2*n - 1; j++){
process.stdout.write(n.toString());
}
console.log();
}
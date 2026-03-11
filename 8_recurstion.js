// Big problem broken into smaller and smaller similar problems. Must know the answer / solution to the smaller problem. That would be your base case.

function factorial(n){
  if(n === 0 || n === 1){  // Base case , case for termination. Must have.
    return 1;
  }

  return n*factorial(n - 1) // Here function called itself with a smaller parameter. Recursion happened.
}

// console.log(factorial(0));
// console.log(factorial(1));
// console.log(factorial(5));



// Fibonacci Sequence:: num 1 + num 2 = num 3

// 1 (n === 1),1 (n === 2),2,3,5,8,13,, (n = number of numbers printed from the fibonacci sequence) ( we are starting the sequence from 1, 1)

function fibonacci(n){
if(n === 1 || n === 2){  // Base case, case for termination
  return 1;
}else{
  return fibonacci(n - 1) + fibonacci(n - 2); // Recursion Happened here
};
};

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(10``));
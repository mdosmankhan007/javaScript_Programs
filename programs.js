// // program to check if the number is even or odd
// // take input from the user
// const prompt = require("prompt-sync")();
// const number = prompt("Enter a number: ");
// //check if the number is even
// if(number % 2 == 0) {
//     console.log("The number is even.");
// }
// // if the number is odd
// else {
//     console.log("The number is odd.");
// }


// // program to check if the number is even or odd
// // take input from the user
// const num = prompt("Enter a number: ");
// // ternary operator
// const result = (num % 2  == 0) ? "even" : "odd";
// // display the result
// console.log(`The number is ${result}.`);



// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // function to check even numbers
// function checkEven(number) {
//   if (number % 2 == 0)
//     return true;
//   else
//     return false;
// }
// // create a new array by filter even numbers from the numbers array
// let evenNumbers = numbers.filter(checkEven);
// console.log(evenNumbers);
// Output: [ 2, 4, 6, 8, 10 ]



// (function(){
//     var a=b=10;  //a assigned to b and b=10; so a is not defined here.
// })();
// console.log(b);
//console.log(a); //a is not assigned.




//JavaScript program to swap two variables

//take input from the users
// let a = 3;
// let b = 5;
// [a, b] = [b, a];

// addition and subtraction operator
// a = a + b;
// b = a - b;
// a = a - b;
//console.log(`${a} ${b}`);

// var a = 1,
//     b = 2,
//     c = a;

// a = b; // must be first or a and b end up being both 1
// b = c;
// console.log(`${a} ${b} ${c}`);

// console.log(`The value of a after swapping: ${a}`);
// console.log(`The value of b after swapping: ${b}`);

// var age = prompt("Hello Welcome to ojas families");
// console.log(age);

// console.log(2 -'2');
// console.log(1+'2'+3+5); 


// program to check if a number is prime or not
// take input from the user
const number = 25;
let isPrime = true;
// check if number is equal to 1
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}
// check if number is greater than 1
else if (number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}
// check if number is less than 1
else {
    console.log("The number is not a prime number.");
}
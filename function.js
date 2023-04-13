// function calculator()   //function definition
// {
//     console.log("calculatting bill")
//     const total = 100 * 1.13;
//     console.log(total);
//     return total;
// }
// //calculator();   //function call.
// const mytotal=calculator();   // storing the value and returning from a function.
// console.log(mytotal);

// console.log(`Your total is $${mytotal}`);   //That will print out the value and message in the console.



// const bill = 100;        //globally declared variable.
// const taxRate = 1.13;
// function calculateBill() {
//   console.log("Running calculate bill!!");
//   const total = bill * 1 + taxRate;
//   return total;
//   //console.log(total);
// }
// calculateBill();
// const total1=calculateBill();  //Storing a Value Returned from A Function
// console.log(total1);
// console.log(`Your total is $${total1}`);



// function calculateBill(billAmount, taxRate)     //using parameters
// {
//     console.log("Running Calculate Bill!!");
//   const total = billAmount * 1 + taxRate;
//   return total;
// }
// const myTotal = calculateBill(100, 0.13);
// console.log(myTotal);
// console.log(`Your total is $${myTotal}`);



// function greeting(name){
//     console.log(`Hey..!${name} Hope everything is fine there...!`);
// }
// let name="Osman";
// greeting(name);
// //console.log(name+ " "'hope everything is fine there');


// function add(a, b) {
//     console.log(a + b);
// }
// // calling functions
// add(3,4);
// add(2,9);


// function Add(a,b){
//     return result;
// }
// let result=add(2,5);
// console.log(result);


// function greet(name,greettext){
//     //let name=abcd;
//     console.log(greettext+" "+name)
//     console.log(`${name} Is a good Boy..!`)
// }
// let name="osman";
// let name1="khan";
// let name2="mohammed";
// let greettext="Good evening...!";
// greet(name,greettext);
// greet(name1,greettext);
// greet(name2,greettext);



// function greet(name,greettext="Good evening...!"){
//     //let name=abcd;
//     console.log(greettext+" "+name)
//     console.log(`${name} Is a good Boy..!`)
// }
// let name="osman";
// let name1="khan";
// let name2="mohammed";

// greet(name);
// greet(name1);
// greet(name2);


// A function(CallBack Function...)

// function fn() {
//     console.log('Just a function')
//   }
//   // A function that takes another function as an argument
//   function higherOrderFunction(callback) {
//     // When you call a function that is passed as an argument, it is referred to as a callback
//     callback()
//   }
//   // Passing a function
//   higherOrderFunction(fn)



//   // Define three functions
// function first() {
//     console.log(1)
//   }
//   function second(callback) {
//     setTimeout(() => {
//       console.log(2)
//       // Execute the callback function
//       callback()
//     }, 0)
//   }
//   function third() {
//     console.log(3);
//   }
//   first()
// second(third)   // pass third as an argument to second:


// // nested function example.

// // outer function
// function greet(name) {
//   // inner function
//   function displayName() {
//       console.log('Hi' + ' ' + name);
//   }
//   // calling inner function
//   displayName();
// }
// // calling outer function
// greet('John'); // Hi John

//Returning A Function...
function greet(name) {
  function displayName() {
      console.log('Hi' + ' ' + name);
  }
  // returning a function
  return displayName;
}
const g1 = greet('John');
console.log(g1); // returns the function definition
g1(); // calling the function

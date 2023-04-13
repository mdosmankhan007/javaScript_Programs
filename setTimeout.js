//setTimeout(function, milliseconds);
//setTimeout Example.
function myAlert(){
  console.log("hey there");
}                    
setTimeout(myAlert,2000);

//The setTimeout() method is useful when you want to execute a block of once after some time.
// program to display a text using setTimeout method
// function greet() {
//   console.log('Hello world');
// }
// setTimeout(greet, 3000);
// console.log('This message is shown first');



// // Define three example functions, but one of them contains asynchronous code
// function first() {
//     console.log(1)
//   }
//   function second() {
//     setTimeout(() => {
//       console.log(2)
//     }, 2)
//   }
//   function third() {
//     console.log(3)
//   }
//   first();
//   second();
//   third();


  // program to display time every 3 seconds
// function showTime() {
//   // return new date and time
//   let dateTime= new Date();
//   // returns the current local time
//   let time = dateTime.toLocaleTimeString();
//   console.log(time)
//   // display the time after 3 seconds
//    setTimeout(showTime, 3000);
// }
// // calling the function
// showTime();



// program to stop the setTimeout() method
let count = 0;
// function creation
function increaseCount(){
    // increasing the count by 1
    count += 1;
    console.log(count)
}
let id = setTimeout(increaseCount, 3000);
// clearTimeout
clearTimeout(id); 
console.log('setTimeout is stopped.');
  

//Closure():
//It is an inner function that has access to the outer or enclosing function’s variables. 
/*The closure has three scope chains:
1.Own scope where variables defined between its curly brackets
2.Outer function’s variables
3.Global variables*/

// javascript closure example

// outer function
function greet() {
    // variable defined outside the inner function
    let name = 'John';
    // inner function
    function displayName() {
        // accessing name variable
        return 'Hi' + ' ' + name;
    }
    return displayName;
}
const g1 = greet();
console.log(g1); // returns the function definition
console.log(g1()); // returns the value.



function Welcome(name) {
    var greetingInfo = function (message) {
      console.log(message + " " + name);
    };
    return greetingInfo;
  }
  var myFunction = Welcome("John");
  myFunction("Welcome "); //Output: Welcome John
  myFunction("Hello Mr."); //output: Hello Mr.John



  //Data Privacy: Generally, closures are used for data privacy.
  let a = 0;
function sum() {
    function increaseSum() {
        // the value of a is increased by 1
        return a = a + 1;
    }
    return increaseSum;
}
const x = sum();
console.log(x()); // 1
console.log(x()); // 2
console.log(x()); // 3
a = a+1;
console.log(a); // 4
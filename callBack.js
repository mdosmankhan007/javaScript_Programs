//Callback function():
/*The benefit of using a callback function is that you can wait for the result of a 
previous function call and then execute another function call.*/


function greet(name,callback) {
    console.log('Hi' + ' ' + name);
    callback();
}
// callback function
function callMe() {
    console.log('I am callback function');
}
// passing function as an argument
greet('Peter', callMe);



//  program that shows the delay in execution
// function greet() {
//     console.log('Hello world');
// }
// function sayName(name) {
//     console.log('Hello' + ' ' + name);
// }
// // calling the function
// setTimeout(greet, 2000);//setTimeOut()
// sayName('John');




function add(){
    console.log("calling add");
}
function sub(name) {
    console.log("calling sub" +' '+ name);
}
//passing function as an argument.
setTimeout(add,3000);
sub("osman",add);

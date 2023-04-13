//forEach():
//let students=["abc","def","gjh","addg"];
//students.push("wett");
//students.pop();
// students.unshift("jkj");
// students.shift();
//students[1]="sdeufh";
//console.log(students);

// let std1=[];
// students.forEach(func=(element)=>{
//     std1.push(element);
    
// });
// console.log(std1);



// let array=["osman","sripriya","sravs","sandeep"];
// array.forEach(Greeting);
// function Greeting(item,index){
//     array[index]="Hello"+' '+ item;
// }
// console.log(array);
// //Greeting();


// //Slice();
// let a=["orange","apple","banana","Mango","watermelon"];
// let b=a.slice(2,4);
// console.log(b);
// //console.log(a.slice(2,4));


//let arr=[1,24,3,55,44,33,20];
//let arr1=arr.sort((a,b)=>a-b);
//console.log(arr1);
//console.log(arr.slice(2,3));


// sorting an array of strings
//var names = ["Adam", "Jeffrey", "Fabiano", "Danil", "Ben"];
// returns the sorted array
//console.log(names.sort());
// modifies the array in place
//console.log(names);
//var priceList = [1000, 50, 2, 7, 14];
//var arrr = priceList.sort((a,b) => a-b);
// Number is converted to string and sorted
//console.log(arrr)

//splice():
// let s=["orange","apple","banana","Mango","watermelon","pineapple"];
// let ss = s.splice(2,3);
// console.log(s);
// console.log(ss);



//Let Variable:
// let counter = 30;
// if (counter === 30) {
//   let counter = 31;
//   console.log(counter); // 31
// }
// console.log(counter);



//Let's take an example to see the difference of var and let:
// function userDetails(username) {
//     if (username) {
//       console.log(salary); // undefined due to hoisting
//       console.log(age); // ReferenceError: Cannot access 'age' before initialization
//       let age = 30;
//       var salary = 10000;
//     }
//     console.log(salary); //10000 (accessible to due function scope)
//     console.log(age); //error: age is not defined(due to block scope)
//   }
//   userDetails("John");



//How do you decode or encode a URL in JavaScript?
// let uri = "employeeDetails?name=john&occupation=manager";
// let encoded_uri = encodeURI(uri);
// let decoded_uri = decodeURI(encoded_uri);
// console.log(decoded_uri);


//Hoisting:
/*Hoisting is a JavaScript mechanism where variables, 
function declarations and classes are moved to the top of their scope before code execution.*/
//Note: The varaible var will used for hoisting.let nad cost doesnot allow hoisting.

console.log(message); //output : undefined
var message = "The variable Has been hoisted";

var message;
console.log(message);
message = "The variable Has been hoisted";




// let obj=[
//   {
//     name:"osman",
//     company:"ojas"
// },
// {
//     name:"khan",
//     company:"amazon"
// }
// ]
// //let arr=" ";
// obj.map((e,i)=>{
//   if(i==0){
//     console.log(e.name)
//   }
  
// }) 

console.log(typeof(undefined));
console.log(typeof("undefined"));
console.log(typeof(2));
// console.log(typeof(true));


function func2(){

  for(var i = 0; i < 3; i++){
     setTimeout(()=>console.log(i),5000);
}
}
func2();



// function runFunc(){
//   console.log("1" + 1);
//   console.log("A" - 1);
//   console.log(2 + "-2" + "2");
//   console.log("Hello" - "World" + 78);
//   console.log("Hello"+ "78");
// }
// runFunc();


// const language = ['JavaScript', 'Java']; 
// language.length = 0; 
// console.log("********",language[1]);



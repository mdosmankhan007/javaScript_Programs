// create a Map.
// const map = new Map(); // an empty map
// console.log(map); // Map {}

/*The syntax of the map() method is:
arr.map(callback(currentValue), thisArg)*/
/*The Array.map() method allows you to iterate over an array and modify its elements using a callback function. 
The callback function will then be executed on each of the array's elements.*/


// let numbers = [2, 4, 6, 8, 10];
// function square(number) {
//   return number * number;
// }
// apply square() function to each item of the numbers list
// let square_numbers = numbers.map(square);
// console.log(square_numbers);


// const prices = [25,16,9,4,36];
// let newPrices = prices.map(Math.sqrt);
// console.log(newPrices);

//custom arrow function
// const string = "JavaScript";
// const stringArr = string.split(''); // array with individual string character

//let asciiArr = stringArr.map(x => x.charCodeAt(0));
// map() does not change the original array
// console.log(stringArr); 
// console.log(asciiArr);


// let array = [3,4,5,6,7];
// let modifiesArray = array.map(function(element){
//   return element*3;
// });
// console.log(modifiesArray);

// create a set.
// let map1 = new Map();
// // insert key-value pair
// map1.set('info', {name: 'Jack', age: 26});
// console.log(map1); // Map {"info" => {name: "Jack", age: 26}}


// Map with object key.
// let map2 = new Map();
// let obj = {};           //You can also use objects or functions as keys. 
// map2.set(obj, {name: 'Jack', age: "26"});
// console.log(map2); // Map {{} => {name: "Jack", age: "26"}}


// let map3 = new Map();
// map3.set('info', {name: 'Jack', age: "26"});
// // access the elements of a Map
// console.log(map3.get('info')); // {name: "Jack", age: "26"}


// const set1 = new Set([1, 2, 3]);
// let map4 = new Map();
// map4.set('info', {name: 'Jack', age: "26"});
// // check if an element is in Set
// console.log(map4.has('info')); //You can use the has() method to check if the element is in a Map.
// // true


// //The clear() method removes all key/value pairs from a Map object.
// let map5 = new Map();
// map5.set('info', {name: 'Jack', age: "26"});
// // removing all element
// map5.clear();
// console.log(map5); // Map {}


// using forEach method()
// let map6 = new Map();       
// map6.set('name', 'Jack');
// map6.set('age', '27');
// // looping through Map
// map6.forEach(function(value, key) {     //You can iterate through the Map elements using forEach().
//   console.log(key + '- ' + value)
// })


// let map7 = new Map();
// map7.set('name', 'Jack');
// map7.set('age', '27');
// looping through the Map
//for (let key of map7.keys()) {      //You can iterate over the Map and get the key using the keys() method.
//console.log(key);



//The map() method creates a new array with the results of calling a function for every array element.
//let numbers = [2, 4, 6, 8, 10];
// function to return the square of a number
//function square(number) {
//return number * number;

// apply square() function to each item of the numbers list
// let square_numbers = numbers.map(square);
// console.log(square_numbers);
// Output: [ 4, 16, 36, 64, 100 ]

//Map() over an Array of Object.
// let users = [
//   {firstName : "Osman", lastName: "Khan"},
//   {firstName : "Priya", lastName: "Kareedu"},
//   {firstName : "Shivaji", lastName: "Enjemuri"}
// ];
// let userFullnames = users.map(function(element){
//     return `${element.firstName} ${element.lastName}`;
// })
// console.log(userFullnames);



// let arr=[4,0,1,0,6];
// let filteredArr = arr.filter((elem) => {
//   return elem !== 0;
// }); 
// let countOfZero = arr.length - filteredArr.length 
// let newArr = [...filteredArr,...Array(countOfZero).fill(0)];

// return arr.splice(0,arr.length,...newArr);



let nums = [4, 0, 1, 0, 6];
let arr1=nums.sort((a,b)=>(a==0)-(b==0));
   

  //for (let index = nums.length - 1; index >= 0; index--) 
  // for (i = 0; i < nums.length - 1; i++) {
  //   if (nums[i] === 0) {
  //     nums.splice(i, 1);
  //     nums.push(0);
  //   }
  // }

//console.log(arr1);


let arr2=nums.filter(data=>data==0);
let arr3=nums.filter(data =>data!==0);
console.log([...arr3,...arr2]);
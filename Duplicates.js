// let chars = ["Todays Topic and task"];
// let uniqueChars = [...new Set(chars)];

// console.log(uniqueChars);
// console.log(chars[0].split(""));
// console.log(...new Set(chars[0].split("")));


/*let arr = [24,65,98,962,45,452,651,42,78];
for(let i=0;i<arr.length;i++)
if(arr[i]%2==0)
{ 
    console.log(arr[i]);
    console.log(map(arr[i]));
}
else{
    console.log(arr[i]+"print Odd numbers");
}
*/

// function removeEven(arr, invert = false) {
//     for (let i = 0; i < arr.length; i++) {
//         const even = arr[i] % 2 === 0
//         if (even ^ invert) {
//             arr.splice(i--, 1)
//         }
//     }
// }
// const arr1 = [24,65,98,962,45,452,651,42,78]
// removeEven(arr1);
// console.log(arr1);

//Using Filter method(): we can remove duplicates from an array.
// var arr = ["apple", "mango", "apple", "orange", "mango", "mango"];
// function removeDuplicates(arr) {
//     return arr.filter((item,
//         index) => arr.indexOf(item) === index);
// }
// console.log(removeDuplicates(arr));


//Using a Set() Method:
//This method sets a new object type with ES6 that allows you to create collections of unique values.

// var arr1 = ["apple", "mango", "apple", "orange", "mango", "mango"];
// function removeDuplicates(arr1) {
//     return [...new Set(arr)];
// }
// console.log(removeDuplicates(arr1));

//forEach() Method:
/*By using forEach() method, we can iterate over the elements in the array, 
and we will push into the new array if it doesn’t exist in the array.*/

// var arr = ["apple", "mango", "apple", "orange", "mango", "mango"];
//     function removeDuplicates(arr) {
//         var unique = [];
//         arr.forEach(element => {
//             if (!unique.includes(element)) {
//                 unique.push(element);
//             }
//         });
//         return unique;
//     }
//     console.log(removeDuplicates(arr));



// let cities = ["Singapore", "Delhi", "London"];
// cities.length = 0;
// console.log(cities);

// cities.splice(0,cities.length)
// console.log(cities);

// let arr = [1, 1, 3, 2, 2,3];
// function unique(arr) {
//     const result = [];
//     for (const i of arr) {
//         let noRepeat = true;
//         for (const j of result) {
//             if (i === j) {
//                 noRepeat = false;
//                 break;
//             }
//         }
//         if (noRepeat) {
//             result.push(i);
//         }
//     }
//     return result;
// }
// console.log(unique(arr));


// let strr = "sreeramineni";
// let arr = ' ';
// //  
// // let char=[...new Set(str)];
// // // let char1= new Set(char)
// //  console.log(char);
// //  console.log(char.join());
// //  console.log(char.toString());
// function f1(str) {
//     for (i = 0; i <= str.length - 1; i++) {
//         let temp = true;
//         for (j = i + 1; j <= str.length - 1; j++) {
//             if (str.charAt(i) == str.charAt(j)) {
//                 temp = false;
//             }
//         }
//         if (temp) {
//             arr = arr + str.charAt(i);
//             //console.log(str.charAt(i));
//         }
//     }
//     return arr;
// }
// console.log(f1(strr));


// let str = "dellboomi";

// // for(var i in str){
// //     var text = str[i].split("");
// //     console.log(text)
// function repeat(str) {
//     for (let i = 0; i <= str.length - 1; i++) {
//         for (let j = i + 1; j <= str.length; j++) {
//             if (str[j] == str[i]) {
//                 return str[i];
//             }
//         }

//     }

//     return -1;
// }
// console.log(repeat(str));

// /////////////////////////////////////
// let str1 = "dellboomi";
// RepeatedChars = (str) => {
//     const chars = {};
//     for (const i of str) {
//         chars[i] = (chars[i] || 0) + 1;
//     }
//     return Object.entries(chars)
//         .filter(char => char[1] > 1)
//         .map(char => char[0]);
// }

// console.log(RepeatedChars(str1));

// /////////////////////////

str = 'dellboomi'
var obj = {}
//var repeats = [];

for (var i = 0; i < str.length; i++) {
    console.log(str.charAt(i));
    var a = str.charAt(i)
    obj[a] = (isNaN(obj[a]) ? 1 : obj[a] + 1);
}

console.log(obj)
// ////////////////////////////

// // program to generate a multiplication table
// const number = 7;
// //creating a multiplication table
// for (let i = 1; i <= 10; i++) {
//     const result = i * number;
//     console.log(`${number} * ${i} = ${result}`);
// }


// let aa= [1, [1,2], [2,3, [4,5],8]]
// let set = new Set(aa);
// let uniqueArray = [...set];
// console.log(uniqueArray);


////////////////////////////


// let origin = [[7,3], [7,3], [3,8], [7,3], [7,3], [1,2]];
// let org=[]
// function recursive(obj){
//     for(let val in obj ){
//         if(typeof obj[val]== 'object'){
//             recursive(obj[val])
//         }
//         else{
//             org.push(obj[val])
//         }
//     }
// }
// recursive(origin)
// console.log("khan",org);

// let org1 = []
// for(let val of org){
//     if(org1.indexOf(val) == -1){
//         org1.push(val)
//     }
// }
// console.log(org1);
// // var origin = [[7,3], [7,3], [3,8], [7,3], [7,3], [1,2]];
// function arrayEqual(a, b) {
//     if (a.length !== b.length) { return false; }
//     for (var i = 0; i < a.length; ++i) {
//         if (a[i] !== b[i]) {
//             return false;
//         }
//     }
//     return true;
// }
// function contains(array, item) {
//     for (var i = 0; i < array.length; ++i) {
//         if (arrayEqual(array[i], item)) {
//             return true;
//         }
//     }
//     return false;
// }
// function normalize(array) {
//     var result = [];
//     for (var i = 0; i < array.length; ++i) {
//         if (!contains(result, array[i])) {
//             result.push(array[i]);
//         }
//     }
//     return result;
// }

// var result = normalize(origin);
// console.log("Osman",result);

// //////////////////////////////////////////////////
// //Remove duplicates
// arr1 = [1, 1, 2, 2, 3, 4, 5, 8]
// let arr2 = [];
// for(let i of arr1){
//     if(arr2.indexOf(i) == -1){
//         arr2.push(i)
//     }
// }
// console.log(arr2);
//////////////////////////////////////////////

// let array = [1,2,-2,4,5,4,7,8,7,7,71,3,6];
// let array1 = [];
// for(let value of array){
//     if(array1.indexOf(value)==-1){
//         array1.push(value)
//     }
// }
// console.log(array1);

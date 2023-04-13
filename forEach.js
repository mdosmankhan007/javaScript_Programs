/*let students = ['John', 'Sara', 'Jack'];

// using forEach
students.forEach(myFunction);

function myFunction(item) {

    console.log(item);
};
console.log(item);*/


// let students1 = ['John', 'Sara', 'Jack'];
// // using forEach
// students1.forEach(myFunction);
// function myFunction(item, index, arr) {
//     // adding strings to the array elements
//     arr[index] = 'Hello ' + item;   //updating an array
// }
// console.log(students1);



//with arrow function and callback
const students = ['John', 'Sara', 'Jack'];
students.forEach(element => {
  console.log(element);
});


// const arrayItems = ['item1', 'item2', 'item3'];
// const copyItems = [];
// // using for loop
// for (let i = 0; i < arrayItems.length; i++) {
//   copyItems.push(arrayItems[i]);
// }
// console.log(copyItems);


const arrayItems = ['item1', 'item2', 'item3'];
const copyItems = [];
// using forEach
arrayItems.forEach(function(item){
    copyItems.push(item);
  })
  console.log(copyItems);


//Using map
//   let map = new Map();
// // inserting elements
// map.set('name', 'Jack');
// map.set('age', '27');
// // looping through Map
// map.forEach (myFunction);
// function myFunction(value, key) {
//     console.log(key + '- ' + value);
// }


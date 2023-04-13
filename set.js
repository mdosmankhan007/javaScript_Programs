//To create a Set, you need to use the new Set() constructor.
// create Set
const set1 = new Set(); // an empty set
console.log(set1); // Set {}

// Set with multiple types of value
const set2 = new Set([1, 'hello', {count : true}]);
console.log(set2); // Set {1, "hello", {count: true}}

// Set with duplicate values.
//When duplicate values are passed to a Set object, the duplicate values are excluded.
const set3 = new Set([1, 1, 2, 2]);
console.log(set3); // Set {1, 2}

const set = new Set([1, 2, 3]);
// access the elements of a Set
console.log(set.values()); // Set Iterator [1, 2, 3]

// //has() method to check if the element is in a Set. 
// const set4=new Set([1,2,3,4])
// console.log(set.has(5));

// const set5=new Set([1,2,3,4])
// console.log(set.values());
// set.add(5);
// console.log(set.values());
// //adding duplicate elements does not add to Set.
// set.add(3);
// console.log(set.values());

// const set6=new Set([1,2,3,4])
// set.delete(5);
// console.log(set.values());

// const set7=new Set([1,2,3,4,5,6])
// set.clear();
// console.log(set.values());


const timeNow = new Date();
console.log(timeNow); // shows current date and time

// ISO Date(International Standard)
const date = new Date("2020-07-01");
// the result date will be according to UTC
console.log(date); // Wed Jul 01 2020 05:45:00 GMT+0545
//Array Method():
  /*1) Push()
  The push() method adds the elements to the end of the array.*/
  let city = ["New York", "Madrid", "Kathmandu"];
  // add "London" to the array
  city.push("London");
  console.log(city);
  // Output: [ 'New York', 'Madrid', 'Kathmandu', 'London' ]
  
  
  var languages = ["JavaScript", "Python", "Java", "Lua"];
  var count = languages.push("C++");
  console.log(languages); // [ 'JavaScript', 'Python', 'Java', 'Lua', 'C++' ]
  console.log(count); // 5
  
  var priceList = [12, 21, 35];
  var count1 = priceList.push(44, 10, 1.6);
  console.log(priceList); // [ 12, 21, 35, 44, 10, 1.6 ]
  console.log(count1); // 6
  
  
  /* 2) pop() Method:
  The pop() method removes the last element from an array and returns that element.*/
  let cities = ["Madrid", "New York", "Kathmandu", "Paris"];
  // remove the last element
  let removedCity = cities.pop();
  console.log(cities)         // ["Madrid", "New York", "Kathmandu"]
  console.log(removedCity);   // Paris
  
  
  var languages = ["JavaScript", "Python", "Java", "C++", "Lua"];
  var popped = languages.pop();
  console.log(languages); // [ 'JavaScript', 'Python', 'Java', 'C++' ]
  console.log(popped); // Lua
  
  // pop returns any type of object
  var numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [-5, -4, -3],];
  console.log(numbers.pop()); // [ -5, -4, -3 ]
  console.log(numbers); // [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]


  /*JavaScript Array slice():
  The slice() method returns a shallow copy of a portion of an array into a new array object.*/

let number = [2, 3, 5, 7, 11, 13, 17];
// create another array by slicing numbers from index 3 to 5
let newArray = number.slice(3,6);
console.log(newArray);
// Output: [ 7, 11, 13 ]


let languages1 = ["JavaScript", "Python", "C", "C++", "Java"];
// slicing the array (from start to end)
let new_arr = languages1.slice();
console.log(new_arr); // [ 'JavaScript', 'Python', 'C', 'C++', 'Java' ]
// slicing from the third element
let new_arr1 = languages1.slice(2);
console.log(new_arr1); // [ 'C', 'C++', 'Java' ]
// slicing from the second element to fourth element
let new_arr2 = languages1.slice(1, 4);
console.log(new_arr2); // [ 'Python', 'C', 'C++' ]


/*JavaScript Array splice():
splice() Syntax:
arr.splice(start, deleteCount, item1, ..., itemN)
where:deleteCount (optional) - The number of items to remove from start.
The splice() method returns an array by changing (adding/removing) its elements in place.*/

let prime_numbers = [2, 3, 5, 7, 9, 11];
// replace 1 element from index 4 by 13
let removedElement = prime_numbers.splice(4, 1, 13);
console.log(removedElement);
console.log(prime_numbers); 
// Output: [ 9 ]
//         [ 2, 3, 5, 7, 13, 11 ]


//Shift():The shift() method removes the first element from an array and returns that element.

let languages = ["English", "Java", "Python", "JavaScript"];
// removes the first element of the array
let first = languages.shift();
console.log(first);
console.log(languages);

// Output: English
//         [ 'Java', 'Python', 'JavaScript' ]



//UnShift():
//The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
let languages = ["Java", "Python", "C"];
// add "JavaScript" at the beginning of the array
languages.unshift("JavaScript");
console.log(languages);

// Output: [ 'JavaScript', 'Java', 'Python', 'C' ]


/* Filter Method():
The arr.filter() method is used to create a new array from a given array consisting of only those
elements from the given array which satisfy a condition set by the argument method. 

Syntax: 
array.filter(callback(element, index, arr), thisValue)*/

function canVote(age) {
        return age >= 18;
    }
    function func() {
      var filtered = [24, 33, 16, 40].filter(canVote);
      console.log(filtered);
    }
    func();

//checking Positive number...
    function isPositive(value) {
      return value > 0;
    }
    var filtered = [112, 52, 0, -1, 944].filter(isPositive);
    console.log(filtered);


//Checking even number:
function isEven(value) {
  return value % 2 == 0;
}
var filtered = [11, 98, 31, 23, 944].filter(isEven);
console.log(filtered);



let numberss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function to check even numbers
function checkEven(number) {
  if (number % 2 == 0)
    return true;
  else
    return false;
}
// create a new array by filter even numbers from the numbers array
let evenNumbers = numberss.filter(checkEven);
console.log(evenNumbers);

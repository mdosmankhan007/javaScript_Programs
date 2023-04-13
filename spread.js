// let fruits = ['🍈', '🍉', '🍋', '🍌'];
// console.log(...fruits);           //You can use spread operator in console.log with iterable objects.

// let user = {name : "John", age : 20 }
// let userCopy1 = {...user}
// console.log(userCopy1);

//The spread operator does not perform deep-copy.

// let fruits = ['🍈', '🍉', '🍋', '🍌'];
// let fruitsCopy = [ ...fruits ]; 
// console.log(...fruitsCopy);          //Spread operator for Copying Arrays.




// let vegetables = ['🍅', '🍆', '🥒'];
// let fruitsAndVeg = [...fruits, ...vegetables]
// console.log(fruitsAndVeg);        //Spread operator for Merging

// let user1 = {name : "John", age : 20 };
// let user2 = {name : "Ram", salary: '20K' };   //While merging objects, if a key already present then it is replaced by last object with same key.
// let userCopy = {...user1, ...user2};
// console.log(userCopy) ;





// let name = "Ram";
// let chars = [...name];    //By using spread we can convert string to charecter.
// console.log(chars);

// let arr1=[1,2,3,4];
// let arr2=["A","B","C","D"];
// let arr3=[...arr1,...arr2]
// console.log(arr3);

// var arr1 = [1,2,3];
//       var arr2 = [4,5,6];
//       var merged = arr1.concat(arr2);
//       console.log(merged);


//       var a, b, c,d, e, f, g;  
//          a = [10,20];
//          b = "rank";
//          c = [30,"points"];  
//          d = "run"
       
//          // concat method.  
//          e = a.concat(b, c, d);  
//             console.log(e);
//          // spread operator  
//          f = [...a,b, ...c, d];
//          console.log(f); 

//          function add(a,b,c,d){
//             return a+b+c+d;
//          }
//          let arr=[1,2,3,4];
//          add(...arr);
//          console.log(add);

//array to object.
var fruits1 = ["banana", "apple", "orange", "watermelon"];
var fruitsObject = { ...fruits1 };
console.log(fruitsObject);


//Using formentries converting array to object.
const arr = [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ];
const obj = Object.fromEntries(arr);
console.log(obj);

//Object to array.
var fruits1 = { 0:"banana",1: "apple", 2:"orange",3: "watermelon"};
var fruitsObject = Object.entries(fruits1);
console.log(fruitsObject);
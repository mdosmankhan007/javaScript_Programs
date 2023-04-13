// let age = 5;
// let welcome = (age > 18) ?
//   () => console.log('Baby') :
//   () => console.log('Adult');
//   welcome();


//    let greet = x => console.log(x);
//     greet('Hello');

//   let sum = (a, b) => {
//     let result = a + b;
//     return result;          //Multiline Arrow Functions
//     }
//     let result1 = sum(5,7);
//     console.log(result1);


// class person {
//     constructor() {
//         this.name = 'Jack',
//             this.age = 25,
//             this.sayName = function () {            //this with Arrow Function
//                 console.log(this.age);
//                 console.log(this.name);
//                 let innerFunc = () => {
//                     console.log(this.age);
//                     console.log(this.name);
//                 };
//                 innerFunc();
//             };
//     }
// }
// const x = new person();
// x.sayName();



let arr = () => {
    console.log(arguments);     // ReferenceError: Can't find variable: arguments
}
arr(4,6,7); 

// to solve the abovr error use spread.
let arr1= (...n) => {
    console.log(n);
}
arr1(4,6,7); // [4, 6, 7]


//Arrow Function with Promises and Callbacks


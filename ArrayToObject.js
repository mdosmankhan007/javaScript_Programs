//array to object.
var fruits1 = ["banana", "apple", "orange", "watermelon"];
var fruitsObject = { ...fruits1 };
console.log(fruitsObject);


//Using formentries converting array to object.
const arr = [['0', 'a'], ['1', 'b'], ['2', 'c']];
const obj = Object.fromEntries(arr);
console.log(obj);

//Object to array.(using Object.entries())
var fruits1 = { 0: "banana", 1: "apple", 2: "orange", 3: "watermelon" };
var fruitsObject = Object.entries(fruits1);
console.log(fruitsObject);


//With Object.fromEntries, you can convert from Map to Object:
const map = new Map([['Osman', 'Khan'], ['Age', 27]]);
const obj1 = Object.fromEntries(map);
console.log(obj1);


//Object.create().
const person = {
    isHuman: false,
    printIntroduction: function () {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
};
const me = Object.create(person);
me.name = 'Mathew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten
me.printIntroduction();


/*Javascript Array entries():
The entries() method returns a new Array Iterator object containing key/value pairs for each array index.*/
// defining an array named alphabets
//const alphabets = ["A", "B", "C"];
// array iterator object that contains
// key-value pairs for each index in the array
//let iterator = alphabets.entries();

// iterating through key-value pairs in the array
//for (let entry of iterator) {
//   console.log(entry);
// }
// Output: 
// [ 0, 'A' ]
// [ 1, 'B' ]
// [ 2, 'C' ]


//Array indexOf():
//The syntax of the indexOf() method is:
//arr.indexOf(searchElement, fromIndex)
//The indexOf() method returns the first index of occurance of an array element, or -1 if it is not found.
//let languages = ["Java", "JavaScript", "Python", "JavaScript"];
// get the index of the first occurrence of "JavaScript"
//let index = languages.indexOf("JavaScript");
//console.log(index);
// Output: 1


//var priceList = [10, 8, 2, 31, 10, 1, 65];
// indexOf() returns the first occurance
//ar index1 = priceList.indexOf(31);
//console.log(index1); // 3

// var index2 = priceList.indexOf(10);
// console.log(index2); // 0

// second argument specifies the search's start index
// var index3 = priceList.indexOf(10, 1);
// console.log(index3); // 4

// indexOf returns -1 if not found
// var index4 = priceList.indexOf(69.5);
// console.log(index4); // -1

////////////////////////////////
//Nested Array of objects:

// var myJSONObject = 
// {
// "abc":
//     [
//         [
//             {"prod_ver" : "prod 1 ver 1"},
//             {"prod_ver" : "prod 1 ver 2"},
//         ],
//         [
//             {"prod_ver" : "prod 2 ver 1"},
//             {"prod_ver" : "prod 2 ver 2"},
//         ],
//         [
//             {"prod_ver" : "prod 3 ver 1"},
//             {"prod_ver" : "prod 3 ver 2"},
//         ]
//     ]
// };
// for(var i = 0; i < myJSONObject.abc.length; i++)
// {
//     var product = myJSONObject.abc[i];
//     console.log(product);
//     for(var j = 0; j < product.length; j++)
//     {
//         var version = product[j];
//     }
// }
// console.log(version);

// ///////////////////////
// var jsonObj = {
//     "name" : "Adam",
//     "age" : "30",
//     "gender" : "male"
// };
// console.log(jsonObj.name);
// console.log(jsonObj.age);
// console.log(jsonObj.gender);

// ///////////////////////
// var jsonObjs = [{
//     "name" : "adam",
//     "age" : "30",
//     "gender" : "male"
// },
// {
//     "name" : "Roy",
//     "age" : "21",
//     "gender" : "male"
// }];

// let arr1=[];
// let sum=0;
// jsonObjs.forEach((e)=>{
//     console.log(e);
//     for(var i in e){
//         if(typeof e[i]=== 'number'){
//             sum+=e[i].age
//         }
//         else {
//             arr.push(e[i])
//            }
//     }
// })
// arr1.push(sum);
// console.log(arr1)
///////////////////////////

// let bigHero = {charecters:[
//         {name:'Hiro',age:22},
//         {name:'Hulk',age:26},
//         {name:'Hunk',age:25},
//         {name:'Hmmm',age:62}
//     ]
// }

// for(let A in bigHero){
//     console.log(bigHero[A].name);
// }
// for(let A of bigHero){
//     console.log(A.name);
// }



// let chars = bigHero['charecters'];
// for(let i=0,len=chars.length; i<len; i++){
//     console.log(chars[i]);
//     console.log(chars[i].name);
// }
// console.log(chars[i]);

// bigHero.charecters.map((e)=>{
//     // console.log(e);
//     if(e.name){
//         console.log(e.name);
//     }
// })

// for(let x in bigHero){
//     for(let z in x)
//     console.log(x[z]);
// }

// for(let n in bigHero){
//     console.log(n);
// //    console.log(bigHero.charecters[n].name);
//     //console.log(n)
// }


/////////////////////////////////

// let two = [
//     [1,2,3,4,5,6,7],
//     [8,9,10,5,7,22,6],
//     [123,54,12,11,9,15]
// ];

// let rows= two.length;
// for(let i=0; i<rows; i++){
//     let items = two[i].length;
//     console.log(i,items);
//     for(let j=0; j<items; j++){
//         console.log(two[i][j]);
//     }
// }

////////////////////////////////

const user_details = [
    {
        id: 1,
        name: "sravan",
        primary_key: 11
    },
    {
        id: 2,
        name: "akhil",
        primary_key: 35
    },
    {
        id: 3,
        name: "raju",
        primary_key: 2
    },
    {
        id: 4,
        name: "arun",
        primary_key: 9
    }
];
const contact_list = [
    {
        id: 11,
        contact: 850054545,
        age: 25,
    },
    {
        id: 2,
        contact: 850054545,
        age: 40,
    },
    {
        id: 35,
        contact: 850054545,
        age: 21,
    },
    {
        id: 9,
        contact: 850054545,
        age: 33,
    },
]
// const aa = [];
// const aaa = [...user_details, ...contact_list];
// console.log(aaa);
// let name_person = "arun"
// for (let i of user_details) {
//     if (i.name == name_person) {
//         for (let j of contact_list) {
//             if (i.primary_key == j.id) {
//                 console.log(j.age)
//             }
//         }
//     }
// }

// const result=user_details.find(({name})=>name==="arun")
// console.log(result)
// const result1 = contact_list.find(({ id }) => id === result.primary_key);
// console.log("age:"+result1.age+ "name:"+result.name);

/////////////////////////////////////

//Write a program to print numbers for example if we give number=5 it should print 12345.
let n = 5; i=1;
while (i <= n) {
    console.log(i);
    i += 1;
}

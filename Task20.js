let data = [{ a: 'happy', b: 'robin', c: ['blue', 'green'] },

{ a: 'tired', b: 'panther', c: ['green', 'black', 'orange', 'blue'] },

{ a: 'sad', b: 'goldfish', c: ['green', 'red'] }];

// Output:['blue','green','green','black','orange','blue','green','red']

let result = [];
function recursion(obj) {
    for (let val of obj) {
        if (typeof obj[val] === "object") {
            recursion(val)
        }
        else {
            result.push(val.c)
        }
    }
}
recursion(data)
console.log(result.flat(Infinity))



/////////////////////////////////

// let  str = ["aaabbbbcccdddd"];

// str.sort((a,b) =>
//      a.length-b.length
// )
// console.log(str)


// let str = "aaabbbbcccdddd";
// let obj2 = {}
// for(let i of str){
//     obj2[i] = (obj2[i] || 0)+1;
// }
// console.log("venkat",obj2);


let obj1 = {}
const SortByLength = function (string) {
    const count = string.split('').reduce((a, b) => {
        a[b] ? a[b]++ : a[b] = 1;
        return a;
    }, obj1);

    const sortedString = Object.keys(count).sort((a, b) => {
        if (count[a] > count[b]) {
            return - 1;
        }
        if (count[a] < count[b]) {
            return 1;
        }
        return 0;
    });
    const str = sortedString.reduce((a, b) => {
        a += b.repeat(count[b]);
        return a;
    }, "");

    return str;
};
console.log(SortByLength('aaabbbbcccdddd'));
// console.log(SortByLength('cccaaabddbbbbb'));

///////////////////////////////////////////////

let arr = [1,2,3,4,5];
let arr1 = [6,7,8,9,10];

// const obj = {};
// arr.forEach((ele, ind) => {
//   obj[ele] = arr1[ind];
// });
// console.log(obj);

let arr2 = [...arr,...arr1]
console.log(arr2);

let obj = {};
for(let i=0; i<arr.length;i++){
  obj[arr[i]]=arr1[i]; //use square brackets to set the key to the value of the array element
}
console.log("osmnnnnnn",obj);



////////////////////////////////////////////////////////////

var ar1 = ["7 1 2 1 2 1 3 2"] 
var ar2 = ["9 10 20 20 10 10 30 50 10 20"] 

function countPairs(ar) {
  var obj = {};

  ar.forEach(item => {
    obj[item] = obj[item] ? obj[item] + 1 : 1;
  });
  
  return Object.values(obj).reduce((acc, curr) => {
    acc += Math.floor(curr / 2)
    return acc;
  }, 0);
}

console.log(countPairs(ar1))
console.log(countPairs(ar2))
 




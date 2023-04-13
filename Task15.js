let arr = ["9/31/2014", "10/31/2014", "11/31/2014", "12/31/2014", "13/31/2014"]
// //output:2014931:yyyymmdd

// let output = arr[0].split("/").join('').replace("/","").reverse();
// console.log(output)


// let dates=["9/31/2014","10/31/2014","11/31/2014","12/31/2014","17/31/2014"]

let final=arr.map((e)=>{

const[arr,month,year]=e.split("/");

return `${year}${arr}${month}`;

  });

  console.log(final);



// for (var i = 0; i < 10; i++) 
// { 
//     setTimeout(function () { 
//     console.log(i); }, 1000); }


const my_arr = [1,4,5,6,7,8,9,9,10,20];
//using reducer function summ my_arr
let value = 0;
let Sum = my_arr.reduce((acc,curr)=> 
    acc+curr,
    value
);
console.log(Sum);

//using arraw function
let sum = my_arr.reduce(
    (accumulator,currentValue)=>accumulator+currentValue
);
console.log(sum);



// const f1 = redundant("apple")
// f1() ➞ "apple"

// const f2 = redundant("pear")
// f2() ➞ "pear"

// const f3 = redundant("")
// f3() ➞ "";

// function arr() {
//     var name = '""';
//     function displayName() {
//       console.log(name);
//     }
//     displayName();

//   }
//   arr();


const squareSumRecursively = (n, res = 0) => {
    if(n){
       return squareSumRecursively(Math.floor(n/10), res+Math.pow((n%10),2));
    };
    return res;
 };
 
 const isHappy = (num, map = {}) => {
    if(num !== 1){
       if(map[num]){
          return false;
       }
       map[num] = 1;
       return isHappy(squareSumRecursively(num), map);
    };
    return true;
 }
 console.log(isHappy(67));
 console.log(isHappy(89));
 console.log(isHappy(139));
 console.log(isHappy(1327));
 console.log(isHappy(2871));
 console.log(isHappy(3970));


let a=10;
let b=20;

 a=a+b;
 b= a-b;
 a=a-b;
 

 console.log(`${a},${b}`);

/////////////////////////////////////////////////////////////////
//  let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];

 //O/p=[1,2,3,5,6,7,10,11,12,16,17]


// let arr = ["1", "5", "8", "10"];
// let c=0;
// let d=[];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]-i!=c){
//         while(c<arr[i]-i){

//             d.push(c+i);
//             c++;
//         }
//     }
// }
// console.log(d);
// console.log(c)

////////////////////////////////////////////////////////////////

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

// /////////////////////////////////////////////////////////////

// let str="windows" 
// //Remove all W's from the string 

// let str1 = [];
// for(let i of str){
//     if(str1.indexOf(i)==-1){
//         str1.push(i)
//     }
// }
// console.log(str1);
/////////////////////////////

// 



// str = 'dellboomi'
// var obj = {}
// //var repeats = [];

// for (var i = 0; i < str.length; i++) {
//     console.log(str.charAt(i));
//     var a = str.charAt(i)
//     obj[a] = (isNaN(obj[a]) ? 1 : obj[a] + 1);
// }

// console.log(obj)

///////////////////////////////////////////////////

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


// // x=10;
// console.log(x)
// var x=10;


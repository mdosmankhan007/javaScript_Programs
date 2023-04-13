var a = "ABCDEFGH";
var b = " ";

for (let i = a.length - 1; i >= 0; i--) {

    b = b + a.charAt(i)
}
console.log(b.toLowerCase())



// let strr = ["2", "3", "4", "2", "3"];
// let arr = ' ';

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




// function removeDuplicate(b){
// for (i = 0; i < b.length; i++){
// let a = true;
// for (j = i + 1; j < b.length; j++){
// if (b[i] == b[j]){
// a = false;
// }

// }
// if(a){
// c.push(parseInt(b[i]));
// }
// }
// return c;
// }
// var bdc = ["2", "3", "4", "2", "3"];
// var c = [];
// console.log(removeDuplicate(bdc));


// let arr1=["2", "3", "4", "2", "3","4","5","5"];
// let arr2=[];
// for(let i in arr1){
//     if(arr2.indexOf(arr1[i])==-1){
//         arr2.push((arr1[i]))
//     }
// }
// console.log(arr2)
// var data = [{
//     name:"Hello",
//     age:20
//     },
//     {
//     name1:"Hello1",
//     age1:21
//     },
//     {
//     name2:"Hello2",
//     age2:22
//     }]

//     let arr=[]
//     sum=0;
//     data.forEach((a1)=>{
//         for(let values in a1){
//             if( typeof a1[values]==="number"){
//                 sum+=a1[values]
//             }
//             else {
//              arr.push(a1[values])
//             }
//         }
//     })
//     arr.push(sum)
//     console.log(arr)
// ///////////////////////Ulternate Method////////////////////
// // let vx;
// // let cd=0;
// // let array=[];

// //  data.map((e,i) =>{
// //  array.push(Object.values(e,i)[0]);

// // cd=cd+Object.values(e)[1];

// // })
// // array.push(cd);
// // console.log(array);

// ///////////////////////////2nd Task/////////////////
// var data1={
//     name:"Hello",
//     data2:[{name:"Hello1",age1:21 },{name1:[{name2:"Hello2",age2:22}]}], 
//     age:20}

let aa = [{
    name: "abc",
    age: 3,
    subject: [
        {
            name: "def",
            age: 4,
            data: [
                {
                    name: "fgh",
                    age: 5
                }]
        }]
}]
//outpu:[ 'abc', 'def', 'fgh', 12 ]
// let arr = []
// sum = 0;
// function value(cal){
//     for( let i in cal){
//         let a=cal[i]
//         if(typeof a==="object"){
//             value(a);
//         }
//         else if(typeof a==="string"){
//             arr.push(a)
//         }
//         else if(typeof a==="number"){
//             sum+=a
//         }
//     }

// }
// value(aa)
// console.log(arr,sum);
let arr1=[];
 let sum=0;

 function rec(abc){
for(let i in abc){
    let a=abc[i]
    if(typeof a==="object"){
        rec(a);
    }
    else if(typeof a==="string"){
        arr1.push(a);
    }
    else if (typeof a === "number"){
        sum+=a;
    }
}

 }
 rec(aa)
 console.log(arr1,sum);
























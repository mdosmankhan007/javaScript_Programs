let a = "Osman Khan";
// let aa = "";
// for(let value of a){
//     // console.log(value);
//     if(value!=="a"){
//         aa+=value
//     }

// }
// console.log(aa);
let aa = "";
let arr = [];
for(let value of a){
    // console.log(value)
    if(arr.indexOf(value) === -1){
        arr.push(value);
        aa+=value
    }
}

console.log(arr);
console.log(aa);


///////////////////////

let num1 = "1223425468";
let number = [];
let number1="";
for(let value of num1){
    console.log(value)
    if(number.indexOf(value) == -1){
        number.push(value)
        number1+=value
    }

} 
console.log(number)

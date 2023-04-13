let input = "230.000";
console.log(parseInt((input), ""))
console.log(typeof (input));

let aa = "00402";
console.log(parseInt((aa), ""))
console.log(typeof (aa));

let b = "03.1400";
console.log(parseFloat((b), ""))
let abc = +b;
console.log(typeof (abc));

let c = "30";
console.log(parseInt(c), "")
console.log(typeof (c));


////////////////////////////////////////////////////////

let input1 = ["AAAAAAAAAAA", "AABBBBBBBAA", "AABCCCCCBAA", "AABCAAACBAA", "AABCADACBAA",
    "AABCAAACBAA", "AABCCCCCBAA", "AABBBBBBBAA", "AAAAAAAAAAA"]

let arr = [
    "AAAAAAAAA",
    "ABBBBBBBA",
    "ABBAAABBA",
    "ABBBBBBBA",
    "AAAAAAAAA"
  ]
// let count = 0;
// for (let i in input1) {
//     if (input1[i] == "AAAAAAAAAAA") {
//     }
//     else if (input1[i] == "AABBBBBBBAA") {
//     }
//     else {
//         count++
//     }
// }
// console.log("%%%%%%%%",count);


let a = [];
function remove(input){
for(let val of input){
    if(a.indexOf(val)== -1){
        a.push(val)
    }

 }
}
remove(arr);


console.log("#####",a.length)

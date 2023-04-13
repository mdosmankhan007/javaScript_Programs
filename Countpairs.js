var ar1 = [7,1,2,1,2,1,3,2] 
var ar2 = [9,10,20,20,10,10,30,50,10,20] 

let a=("7 1 2 1 2 1 3 2")
let b=[]
b.push(a)
console.log(b);
// for(let i of b){
//     if(i===b[i]){
//         console.log(b[i]);
//     }
// }

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
 

// let obj = [{a:3, b:1, c:4, d:5}]

// let temp = obj[0];
// obj[0] = obj[1];
// obj[1] = temp;
// console.log(obj)

// let arr = Object.entries(obj);
// console.log(arr);

// let result = obj.sort(
//     (a,b)=>a[1]-b[1]
//     );
// console.log(result);


let obj = {a:3, b:1, c:4, d:5}
let arr=[]
for(let val in obj){
arr.push([val,obj[val]])
}
console.log("osman",arr);


for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i][1] > arr[j][1]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.log("khan",arr);
  let obj1={};
  arr.map(out=>{
    obj1[out[0]]=out[1]
  })
  console.log(obj1);

  ////////////////////////////////////////////////
// Reverse the word:
// var s = " the sky is blue";
var input="Hello world!";
let a = input.split(' ')
// let a = s.split(' ')                                    
var ans ="";
for (var i = a.length-1; i >= 0; i--)
{   
    ans = ans + " " + a[i];
}
console.log(ans);
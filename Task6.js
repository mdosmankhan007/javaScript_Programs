let arraysOfObjects = [
    { age: 60, value: 50 },
    { age: 50, value: 50 },
    { age: 60, value: 50 }
                      ]
let arr = []
let add = 0
// arraysOfObjects.map((e)=>{
//      console.log(e)


for (let values of arraysOfObjects) {
//   add = add+ arraysOfObjects[values].value
    add = add+ values.value
}
 console.log(add)
//  })
// console.log(add);


openParenthesisCount = 0;
closedParenthesisCount = 0;
let str = ")()(";
for(let i of str){
  if(i[0] === "(" && str.charAt(str.length-1)===")"){
    openParenthesisCount = openParenthesisCount+1;
   }

   else{
    closedParenthesisCount = closedParenthesisCount+1;
   }
}
console.log(openParenthesisCount);
console.log(closedParenthesisCount);
if(openParenthesisCount === closedParenthesisCount){
    console.log("you given correct input")
}
else{
    console.log("you given wrong input")
}

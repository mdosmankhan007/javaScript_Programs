

let a = [{
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
                },
            {
                name:'sir'
            }  ]
        }]
}]
let array=[];
let sum=0;
function recursion(obj){
    for(let i in obj){
       if(typeof obj[i] === "object"){
        // console.log(obj[i]);
       recursion(obj[i])
       }
      else if(typeof obj[i] === "string"){
        array.push(obj[i])
          }
        // console.log(obj[i])
       else{
        sum=sum+obj[i];
       }
    }
}
recursion(a);
array.push(sum);
console.log(array);
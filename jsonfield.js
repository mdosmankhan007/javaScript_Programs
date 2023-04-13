let arr = [{

    "name": "venakt",

    "age": 26,

    "number": 123,

    "friends": "lot many",

    "girlfrientsList": "notFound",

    "location": "molkapatnam",

    "salary": "less",

    "height": "5.5",

    "wight": "60kg",

    "domain": "frontEnd",

    "strongIn": "flirting",

    "weaknIn": "controlingEmotions",

    "experience": "1.5years",

    "currentLocation": "hyd"

},

{

    "name": "vinay",

    "age": 26,

    "number": 1234,

    "friends": "lot many",

    "girlfrientsList": "NearTo 1000 Members family",

    "location": "hydrebad",

    "salary": "medium",

    "height": "5.6",

    "wight": "70kg",

    "domain": "frontEnd",

    "strongIn": "controlingEmotions",

    "weaknIn": "flirting",

    "experience": "1.5years",

    "currentLocation": "hyd"

},

{

    "name": "kalyan",

    "age": 29,

    "number": 12345,

    "friends": "limited",

    "girlfrientsList": "notFound",

    "location": "hydrebad",

    "salary": "less",

    "height": "5.11",

    "wight": "100kg",

    "domain": "frontEnd",

    "strongIn": "crackingJokes",

    "weaknIn": "controlingEmotions",

    "experience": "1.5years",

    "currentLocation": "hyd"

}

]
let arr1 = JSON.stringify(arr, ["name", "age", "number", "location", "salary", "domain"])
// console.log(arr1)
let arr2 = JSON.parse(arr1)
// console.log(arr2);

let a = [
    {
        "abc":"dfbjf",
        "age":"25"
    },
    
    {
        "def":"adfsf",
        "age":"26"
    },
    {
        "ggg":"dfdjggf",
        "age":"30"
    }
]


// let arr3 = []
// let add = 0
// a.forEach(ele=>{
//    Object.values(ele).forEach(ele1=>{
//     if(typeof +ele1 == "number" && !isNaN(+ele1)){
//         add = add + +ele1;
//     }else{
//         arr3.push(ele1)
//     }
//    })  
// })
// arr3.push(add);
// console.log(arr3);
let arr3 = []
let add = 0
a.forEach(ele=>{
   for(let i in ele){
       if(typeof +ele[i] == "number" && !isNaN(+ele[i])){
           add = add + +ele[i]
       }else{
           arr3.push(ele[i])
       }
 }
})
arr3.push(add);
console.log(arr3);


//output=[dfbjf,adfsf,dfdjggf,81]

// let b=[];
// let sum=0;
// a.map((e)=>{
//     if(e.abc){
//         b.push(e.abc);
//       }
//       if(e.def){
//         b.push(e.def);
//       }
//       if(e.ggg){
//         b.push(e.ggg);
//       }
//  if(e.age){
//    sum=sum+(parseInt(e.age)); 
//  }   
// })
// b.push(sum);
// console.log(b);




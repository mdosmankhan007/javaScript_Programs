// let arr=["1","2","3"]
// let arr1=["priya","asiya","ussu"]
//note : for of means..........array
//for in.............object

// for(let val in arr1){
//     // console.log(arr1[val]);//priya,asiya,ussu
//     // console.log(val);//0,1,2(index)
//     }

// for(let val in arr){
// // console.log(arr[val]);//1,2,3(values)
// // console.log(val);//0,1,2(index)
// }

/////////////////////////////////////////////////////////////////////////

// for(let val of arr1){
//     console.log(arr[val]);//undefined
//     console.log(val);//1,2,3(values)
// }

// for(let val of arr){
//     // console.log(arr[val]);//undefined
//     // console.log(val);//1,2,3(values)
// }
///////////////////////////////////////////////

let a = [1, [1, 2], [2, 3, [4, 5], 8]]

let arr1 = []

function recursion(obj) {
    for (let val in obj) {
        // if(Array.isArray(obj[val])){
        //      recursion(obj[val])
        // }
        if (typeof obj[val] == "object") {
            recursion(obj[val])
        }
        else {
            // console.log(obj[val]);
            arr1.push(obj[val])
        }
    }
}
recursion(a)
console.log(arr1)
// arr1 = [1, 1, 2, 2, 3, 4, 5, 8]
let arr2 = [];
for(let i of arr1){
    if(arr2.indexOf(i) == -1){
        arr2.push(i)
    }
}
console.log(arr2);



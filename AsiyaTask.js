let arr = [
    { id: 1, status: "not started", statuscode: "not_started" },
    { id: 2, status: "open", statuscode: "open" },
    { id: 3, status: "not started", statuscode: "not_started" },
    { id: 4, status: "completed", statuscode: "completed" },
    { id: 5, status: "open", statuscode: "open" },
    { id: 6, status: "in_progress", statuscode: "in_progress" }

]
let obj = {}

arr.map((ele) => {
    let key = ele["statuscode"];
    obj[key] = obj[key] ? [...obj[key], ele["id"]] : [ele["id"]];
    console.log(obj[key]);
})
console.log(obj);


/////Alternate Solution//////////

// let arr1 = [
//     { id: 1, status: "not started", statuscode: "not_started" },
//     { id: 2, status: "open", statuscode: "open" },
//     { id: 3, status: "not started", statuscode: "not_started" },
//     { id: 4, status: "completed", statuscode: "completed" },
//     { id: 5, status: "open", statuscode: "open" },
//     { id: 6, status: "in_progress", statuscode: "in_progress" }
// ]

// let output = {}

// for (let i in arr1) {
//   let status = arr1[i].status
//   let id = arr1[i].id
//   if (output[status]) {
//     output[status].push(id)
//   } else {
//     output[status] = [id]
//   }
// }
// console.log(output)

var x = null;
console.log(typeof x);

var y=[]
console.log(typeof []);
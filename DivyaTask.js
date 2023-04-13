let arr = [1,2,2,3,3,4,5,6,6];
let arr1 = [];
for(let val of arr){
    if(arr1.indexOf(val) == -1){
        arr1.push(val);
    }
}
console.log(arr1);
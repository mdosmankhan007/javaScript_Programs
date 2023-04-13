let Array = [30, 2, 1, 4, 5, 6, 7, 3, 2]
// console.log(array.sort());
for (var i = 1; i < Array.length; i++)
    for (var j = 0; j < i; j++)
        if (Array[i] > Array[j]) {
          var temp = Array[i];
          Array[i] = Array[j];
          Array[j] = temp;
        }

console.log(Array);

//////////////////////////
let nums = [2,7,11,15], target = 9
for(let i=0;i<nums.length;i++){
    for(let j=0;j<nums.length;j++){
        if((nums[i]+nums[j]) == 9){
            console.log([i,j]);
            return
        }
    }
}
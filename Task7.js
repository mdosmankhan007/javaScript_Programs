str1 = "find the length of the string without using length method";
function strLength(string) {
    var length = 0;
    while (string[length] !== undefined) {
        length++;
    }
    return length;
}

console.log(strLength(str1));
console.log(strLength(""));

let str = "krishna"
let count = 0
for (let i in str) {
    count++
}
console.log(count)
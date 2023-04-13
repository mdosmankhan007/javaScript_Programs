var a="abc";
var b= '';
for(var i=0; a.length;i--)
{
    // console.log("print revesrse string" )
    b[i]
}
console.log(b);


function reverseString(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}
reverseString("hello");
console.log(reverseString("hello"));

//////////////////////////////////////////////////////////////

function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
reverseString('hello');
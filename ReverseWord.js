let str = "the sky is blue";
let a = str.split(' ')
let ab = [];
let strr = "";
for (i = a.length - 1; i >= 0; i--) {

     strr = strr + " " + a[i];
}
console.log(strr);

//////////////////////////////////////////////////////////////////////

//reverseString:
function reverseString(str) {
     var newString = "";
     for (var i = str.length - 1; i >= 0; i--) {
         newString += str[i];
     }
     return newString;
 }
 console.log(reverseString('hello')); 

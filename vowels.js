// // program to count the number of vowels in a string
// function countVowel(str) { 
//     // find the count of vowels
//     const count = str.match(/[aeiou]/gi).length;
//     // return number of vowels
//     return count;
// }
// // take input
// const string = ('Enter a string:good Morning Ojas family, we welcomes you... ');
// const result = countVowel(string);
// console.log(result);



const str = "ThE quick brown fox jumps over a lazy dog"; 
const vowels = "aeiouAEIOU";
//const consonants = str.match(/[^aeiou]/gi);  
  console.log(str.split(" "))
  let arr=str.split(" ")
   let arr1=[];
  arr.forEach(Hello => {
    console.log(vowels.indexOf(Hello[Hello.length-1]))
   // console.log(Hello[Hello.length-1])
    if(vowels.indexOf(Hello[Hello.length-1])>-1)
    {
        arr1.push(`${Hello}/`)
    }
    else{
        arr1.push(`${Hello}!`)
    }
  })
 
// str.split(/\s*\b\s*/) ;
// const countVowels = (str) => (str.include(/[aeiou]/gi) || []).length
// vowels.concat([''],countVowels).forEach(k => { console.log(k); } );



let strr = "venkateshwarluremadala";
let vow = "aeiou";
let strr1 = strr.split("");
console.log(strr1);
vowelsCount = 0;
consonantCount=0;

for(let i in strr){
  if (strr.charAt(i) == "a" || strr.charAt(i) == "e" || strr.charAt(i) == "i" || strr.charAt(i) == "o" || strr.charAt(i) == "u") {
    vowelsCount += 1;
  }
  else{
    consonantCount++;
  }
}
console.log(vowelsCount);
console.log(consonantCount);
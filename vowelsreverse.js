const str = "The quicke brown fox jumps over are lazy dog"; 
const vowels = "aeiouAEIOU";
//const consonants = str.match(/[^aeiou]/gi);  
  console.log(str.split(" "))
  let arr=str.split(" ")
   let arr1=[];
  arr.forEach(Hello => {
    //console.log(vowels.indexOf(Hello[Hello.length-1]))
   // console.log(Hello[Hello.length-1])
    if(vowels.indexOf(Hello[Hello.length-1])>-1)
    {
       let v=`${Hello}`
       let reverseWord=v.split(" ").map(word => word.split("").reverse().join(""));
       arr1.push(`${reverseWord}`)

    }
    else{
        arr1.push(`${Hello}_`)
    }
    console.log(arr1);
  })
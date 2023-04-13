const str="hello world my name is Robo my storage is one TB"

 const vow="aeiouAEIOU"

   //console.log(str.split(" "))    

 let arr=str.split(" ")

 let arr1=[];

 arr.forEach(Hi=>{

    console.log(vow.indexOf(Hi[Hi.length-1]))

    if(vow.indexOf(Hi[Hi.length-1])>-1){

 let e=`${Hi}`

 let reverseWord= e.split(" ").map(word => word.split("").reverse().join(""));

 

 arr1.push(`${reverseWord}`)}

 else{

        arr1.push(`${Hi}`)

    }

 })

console.log(arr1)
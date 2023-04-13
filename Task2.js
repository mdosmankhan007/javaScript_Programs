//find the number which are divisible by 2,3,4,5 under 1000

// function Div(){
//     for(var i=1;i<1000;i++){
//         if(i%2==0){
//             if(i%3==0){
//                 if(i%4==0){
//                     if(i%5==0){
//                         console.log(i)
//                     }
//                 }
//             }
            
//         }      
// }


// function result(N) 
// {
// for (let num = 0; num < N; num++) 
//   {
// if (num % 2 ==0 && num % 3 == 0 && num % 4 == 0 && num % 5 == 0)
// var a=num;
// console.log(a);
//   }
// }
// let N = 1000;
// result(N);
// }
//Div(console.log(i))


// 1)let a=["1","5","8","10"]===>Display the missing numbers in array

// function prletMissingElements(arr, N)
// {
// let diff = arr[0] - 0;
//   for(let i = 0; i < N; i++)
//     {
//         if (arr[i] - i != diff)
//         {    
//             while (diff < arr[i] - i)
//             {
//                 console.log((i + diff) + " ");
//                 diff++;
//             }
//          }
//     }
// }

// let arr = [ "1", "5", "8", "10" ];
// let N = arr.length;
// // Function call
// prletMissingElements(arr, N);

let arr = ["1", "5", "8", "10"];
let c=0;
let d=[];
for(let i=0;i<arr.length;i++){
    if(arr[i]-i!=c){
        while(c<arr[i]-i){

            d.push(c+i);
            c++;
        }
    }
}
console.log(d);
// let output should be two capital letter seperated by the dot
// its should b like:Osman Khan=O.K

// let str="Osman Khan";
// let str1=str.split('');
// console.log(str1);

// let num=null
// console.log(num);
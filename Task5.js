let arr = [1, 1, [2, 2], [[3, [4], 3], 2]]

let arr1=[];
let arr2=[];
function recursive(obj){
    // console.log(obj)
    obj.map((e)=>{
        
        if(Array.isArray(e)){
            recursive(e) 
            // console.log(e);
            
        }
        else{
            console.log(e)
            arr1.push(e)
            for(let key of arr1){
             if ( arr2.indexOf(key)===-1 ){
                arr2.push(key)
             }

            }
        }
        // if(Array.isArray(obj)===-1){
        //     console.log(obj)
        // }
        // else(){

        // }
    })
 

}
recursive(arr)
console.log(arr1);
console.log(arr2);
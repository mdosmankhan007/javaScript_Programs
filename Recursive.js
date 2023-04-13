let a = [
    {
        name: "abc",
        age: 3,
        subject: [
            {
                name: "def",
                age: 4,
                data: [
                    {
                        name: "fgh",
                        age: 5,
                        // id:5
                    }]
            }]
    }]

// O/p  ==>[abc,def,fgh,12]
let sum=0;
let array1=[];
let array2=[];
function recursive(object) {
    //    console.log(obj)
    for (let values in object) {
        let keys = object[values]
        if (typeof keys == "object") {
            recursive(keys)
        }
        else if (typeof keys ==="number") {
           sum+= keys;
        }   
        else if(typeof keys==="string")
        {
           array1.push(keys);
        }

        // console.log(obj[values] );
    }
}
recursive(a);
console.log(array1);//abc,def,fgh
array2.push(sum);
console.log(array2)// 12
let array3= array1.concat(array2);
console.log(array3);



////////////////////////////////////////////

let obj = {
    name: "raj",
    roll: 892,
    id: {
      idName: "raj",
    },
    section: {
      sectionName: "raj",
      alias: {
        name: "raj",
      },
    },
  };
  
  let changeName = (obj) => {
    for (let i in obj) {
      if (obj[i] == "raj") {
        obj[i] == "abhishek";
      } else {
        changeName(obj[i]);
      }
    }
  };
  
  changeName(obj);
  
  console.log(obj);


  function factorial(num){
    if(num === 1){
        return num;
    }
    return num * factorial(num-1) 
}

console.log(factorial(3));
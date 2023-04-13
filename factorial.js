//Using for loop

function factorialize(num) {
    if (num === 0 || num === 1)
      return 1;
    for (var i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  }
console.log(factorialize(5));

////////////////////////////////////////
//Using while loop

function factorialize(num) {
    var result = num;
    if (num === 0 || num === 1) 
      return 1; 
    while (num > 1) { 
      num--;
      result *= num;
    }
    return result;
  }
  console.log(factorialize(6));
///////////////////////////////////////
// using recursive method:
function factorial(num){
    if(num === 1){
        return num;
    }
    return num * factorial(num-1) 
}

console.log(factorial(4));
console.log(factorial(5));

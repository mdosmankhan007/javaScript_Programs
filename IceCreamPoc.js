//Synchronous.
// console.log(" I ");
// console.log(" eat ");
// console.log(" Ice Cream ");//synchronous

// //Asynchronous.
// console.log("I");
// // This will be shown after 2 seconds
// setTimeout(()=>{
//   console.log("eat");
// },3000)
// console.log("Ice Cream")


//Callback.
function One (call_Two){
    console.log("stepOne completed, plzz call two");
    call_Two();
}
function Two (){
    console.log("stepTwo");
    
}
One(Two);


/* Steps to make IceCream:
1.place Order.
2.Cut the fruits.
3.add water and ice.
4.start the machine.
5.select container.
6.select toppings.
serve ice cream. */

/* Store Room---->Back-end
   Kitchen----> Front-end*/

let stocks = {
    fruits:["Strawberry","grapes","banana","mango","apple"],
    liquid:["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["chocolate","peanuts"],
};
/*The entire business depends on what a customer orders. Once we have an order, we start production and then we serve ice cream. So, we'll create two functions ->

order
production  */

/* This is how it will work
Steps: Order from customer.
        fetching ingredients.
        start production.
        serve.  */


//Lets make Functions by using Arrow Func
let order = (fruit_name,call_Production) => {
    setTimeout(function(){
        console.log(`${stocks.fruits[fruit_name]} was selected`);
        // function 👇 is being called 
    call_Production(); 

    },3000)
    
};
let production = () =>{
    setTimeout(()=>{
      console.log("production has started")
    setTimeout(() => {
        console.log("the fruit has been chopped")
      },2000)

    },0000)
  };
order(0,production);
// // Initialize a promise
// const promise = new Promise((resolve, reject) => {
//     resolve('We did it!')
// });
// console.log(promise);


// const hasMeeting=false//true;
// const meeting=new Promise((resolve,reject) =>{
//     if(!hasMeeting){
//         const meetingDetails={
//         name:'Marketing meeting',
//         location:'Skype',
//         time:'1:00 PM'
//         }
//         resolve(meetingDetails);
//     }
//     else{
//         reject(new Error('Meeting Already scheduled'))
//     }
// });
// const addToCalender=meetingDetails=>{
//     const calender=`${meetingDetails.name} is scheduled at ${meetingDetails.time} on
//     ${meetingDetails.location}`;
//      return Promise.resolve(calender)
//     };

// meeting
// .then(addToCalender)
// .then(res=>{
//     //Resolve
//     console.log('meeting scheduled');
//     console.log(res);
// })
// .catch(function (err) {
//         console.log(err.message);
//     });



    /*const promise1 = Promise.resolve('Promise 1 completed');
    const promise2 = new Promise((res,rej) => {
        setTimeout(() => {
            res('Promise 2 completed');
        }, 3000);
    });*/
    // promise1.then(res => console.log(res));
    // promise2.then(res => console.log(res));

    // all promises print at a time.
   // Promise.all([promise1,promise2]).then(res => console.log(res));

    //want to print only one promise.
   // Promise.race([promise1,promise2]).then(res => console.log(res));


    //generator function.
     /*generator function are not asynchronous operation.
     they are just about pausing things so with this u can pause one function
     and rest will continue to run.*/

    //  function* generatorFunc(){
    //     let data = getData();
    //     yield data;
    //     console.log(data);
    //  }




     // a promise
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved')}, 4000); 
});


// async function
async function asyncFunc() {                    //Using try/catch block.
    try {                               
        // wait until the promise resolves 
        let result = await promise; 
        console.log(result);
    }   
    catch(error) {
        console.log(error);
    }
}           /*If the program runs successfully, it will go to the try block.
            And if the program throws an error, it will go to the catch block.*/
// calling the async function
asyncFunc(); // Promise resolved
setTimeout(() => {
    console.log(1);
}, 0); 
console.log(2);
console.log(3);

// setTimeout(() => {
//     console.log("Hello World!!!");
// }, 5*1000);

// promise =>

const promise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Here is the money!!!");
        // reject("Don't have money!!!");
        
},5000)});

// promise.then((data)=>{
//     console.log("promise data",data);
// }).catch(err=>{
//     console.log("Promise rejected",err);
// });

promise.then((data=>{
    console.log(data);
}))

// setTimeout(() => {
//     console.log(1);
// }, 0); 
// console.log(2);
// console.log(3);

// // setTimeout(() => {
// //     console.log("Hello World!!!");
// // }, 5*1000);

// // promise =>

// const promise = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("Here is the money!!!");
//         // reject("Don't have money!!!");
        
// },5000)});

// // promise.then((data)=>{
// //     console.log("promise data",data);
// // }).catch(err=>{
// //     console.log("Promise rejected",err);
// // });
// promise.then((data=>{
//     console.log(data);
// }))
console.clear();

// const url  = "https://jsonplaceholder.typicode.com/users/1";
// // const data = fetch(url).then(response=>{
// //     console.log(response);
// //     response.json().then(userData=>{
// //         console.log(userData.name);
// //     })
// // });

// (async ()=>{   //response
//     try {
//         const userData = await (await fetch(url)).json();
//         // const response = await fetch(url);
//         // const userData = await response.json();
//         console.log(userData);    
//         // console.log(userData.name);    
//         // console.log(userData.email);    

//         // let {name,email, address} = userData;
//         // console.log(name);
//         // console.log(email);
//         // const {suite,zipcode} = address;
//         let {name,email, address} = userData;
//         console.log(name);
//         console.log(email);
//         const {suite,zipcode} = address;
//         // address.suite
//         console.log(suite);
//         console.log(zipcode);
        
//         // renaming a variable
//         // const fullName = userData.name;
//         let {name:fullName} = userData
//     } catch (error) {
//         console.log(error);
//     }
// })();

// array destructuring;
let arr = [1,2,3,4,5];
const [firstNumber,...rest] = arr;
const [,,,,second] = arr;

console.log(firstNumber,rest);
console.log(second);



// IIFE 


// const fn = ()=>console.log("fn");

// // fn();
// (()=>console.log("fn"))();

const data = ["Nikhil"];
let [name] = data;
console.log(name);

const sum = (name,...args)=>{
    console.log("hello",name);
    console.log(args);
}


sum("Nikhil",1,2,3,4,5);


console.clear();
const userData = {
    name:"Nikhil",
    id:101,
    address:{
        city:"Faridabad",
        state:"Haryana"
    }
}
const user1 = {...userData};
user1.address.pin = 12345;
user1.name = "Nikhil Sharma"

console.log(userData);
console.log(user1);


// arr = [1,2,3,4,5];
// let arr2 = [...arr];

// arr2[0] = 9;
// console.log(arr);
// console.log(arr2);

// const nums = (a,b,c)=>{
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// const args = [1,2,3]

// nums(...args);


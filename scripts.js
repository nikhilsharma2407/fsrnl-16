let name = "Nikhil Sharma";


// console.log(name);

// var function scoped ->hoisted
// let block scoped

function getName(){
    console.log(name);
    var name = "Nikhil";
    if(true){
        var name = "Nikhil Sharma";
        console.log("Inside if",name);
    }
    console.log("Inside Fn",name);
}

getName();


// for(let i =0;i<5;i++){
//     console.log(i);
// }

// if(i>=5){
//     console.log("greater than 5");
// }
let num;
num = 5;
const PI = 3.14;
console.log(PI);

name.substr(7,1);
name.substring(7,8);

num = 10000000;
console.log(num.toLocaleString());
console.log(num.toLocaleString("en-in"));

// boolean - >true/false


// truthy, non-truthy
// non-truthy

"",
undefined,
null;
NaN;
0;

if(!NaN){
    console.log("Non truthy");
}

"abc"-10000;
console.log("abc"*123);

let validNum = "100";

let invalidNum = "100a";

console.log(+validNum !== validNum)
console.log(+invalidNum  !== invalidNum);

var a = "10";
var b  = 10;


console.log(a==b);

var arr = [1,"abc",true,3];


// Array methods;

console.clear();
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
};

const printAbc = function () {
    console.log("abc");
    
}
const cb = function (callback) {
    callback();
}

cb(printAbc)

// arrow functions

// var fn = (name,city)=>{
//     return "hello "+name +" from " +city;
// };
console.clear()
// fn("Nikhil","Faridabad");

// const return5 = ()=>{
//     return 5;
// }
const return5 = ()=>5;

const fn = (name,city)=>`Hello ${name} from ${city}`;

console.log(fn("Nikhil","Faridabad"));






var arr = [1,2,3,4,5];

const my_fn = (elem)=>{
    console.log("value is",elem);
}
arr.forEach(my_fn);

const newArr = arr.map(elem=>elem+10);
console.clear();
console.log(newArr);

const even = arr.filter(elem=>elem%2==0);

const sum = arr.reduce(
    (prev,elem)=>{
        prev+=elem
        return prev
    }
    );
const prod = arr.reduce((res,elem)=>res*elem);
console.log(sum);
console.log(prod);
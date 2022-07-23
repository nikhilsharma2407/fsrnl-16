// string boolean number object null


let name:string = "Nikhil";
let age:number = 25;

let isAdmin:boolean = true 

let isLoading :boolean | null = null;

isLoading = null
isLoading = false

let unkownValue:any = 123

unkownValue = true
unkownValue = "abc"



// const sum = (n1:number,n2:number,n3?:number):number=>{
//     return n1+n2
// }



sum(1,1)
sum("1",1)
sum()
sum(1,1,1)


const ids:number[] = [1,2,3]


const addNumber = (n1:number,n2:number):number=>{
    return n1+n2
}

const addStrings = (n1:string,n2:string):string=>{
    return n1+n2
}

addNumber(1,2)
addStrings("1","2")


// should take either two number or strings , add and return the result
// const sum = (n1:number|string,n2:number|string):number|string=>{
//     return <any>n1+n2
// }


// Generic
type myType = String | Number

function sum<T extends myType>(n1:T,n2:T):T{
    return <T>n1+n2 
}

sum(1,1)
sum("1","1")

sum(true,false)
sum(null,false)
sum({},null)

sum("1",1)
sum(1,"1")



// Generics

// Interface

interface IUser{
    username:string
    name:string
    readonly id:number
    friendList:string[]
    isAdmin?:boolean
}


const user:IUser = {
    username:"abc",
    name:"abc",
    id:123,
    friendList:[]
};

user.userName

user.id = 123

// ENUMS string constants

enum EndPoints{
    BASE_URL  = "http://localhost:4000/",
    SIGNUP = "user/signup",
    LOGIN = "user/login",
    LOGOUT = "user/logout",
    ADD_FRIEND = "user/addFriend",
    REMOVE_FRIEND = "user/removeFriend",
}
EndPoints.LOGIN

enum WeekDays{
    SUN = "SUN",
    MON = "MON",
    TUE = "TUE",
    WED = "WED",
    THR = "THR",
    FRI = "FRI",
    SAT = "SAT"
}
// enum
// mapped Types

type Attendance = {
    [K in WeekDays]?:boolean
}

// type Attendance = {
//     SUN?:boolean,
//     MON?:boolean,
//     TUE?:boolean,
//     WED?:boolean,
//     THR?:boolean,
//     FRI?:boolean,
//     SAT?:boolean
// }

type MappedTypeUser = {
    [K in keyof IUser]?:IUser[K]
}

type key = "id"

type userAge = IUser[key]

type OptionalTypeUser = Partial<IUser>




// const attendance = new Map<WeekDays,boolean>();
const attendance:Attendance = {
    MON:true
}





const markAttendance = (day:WeekDays)=>{
    attendance["abc"] = true
}

markAttendance(WeekDays.MON)



interface IAdmin extends IUser{
    adminID:boolean
}


const obj:IAdmin = {}


keyof IUser


export {}
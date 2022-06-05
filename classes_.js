class User{
    constructor(name,city){
        this.name = name
        this.city = city
    };

    intro(){
        return `Hi I'm ${this.name} from ${this.city}`;
    }
}


const user = new User("Nikhil","Faridabad");
console.log(user); 

console.log(user.intro());

class Instuctor extends User{
    constructor(name,city,course){
        super(name,city);
        this.course = course;
    }
    myIntro(){
        console.log(`Hi I'm ${this.name}, your ${this.course} instructor!!!`) ;
    }
};

const ins = new Instuctor('Nikhil','Faridabad','Full stack');
ins.intro();
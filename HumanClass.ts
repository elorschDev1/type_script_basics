class Human{
    ssn:string;
    firstName:string;
    lastName:string;
    //Let's look at the concept of getters and setters using certain properties below
    //A getter is a method that return's a property's value, its also called an accessor
    //A setter is a method that update's the property's value, its also called a mutator
    private _age:number;
    private _residence:string;

    constructor(ssn:string,firstName:string,lastName:string,age:number,residence:string){
        this.firstName=firstName;
        this.lastName=lastName;
        this.ssn=ssn;
        this._age=age;
        this._residence=residence;

    }

    getFullName():string{
        return `${this.firstName} ${this.lastName}.`;

    }

    //Let's have a look at how to return the _age and _residence properties
    get age(){
        return this._age;
    }

    get residence(){
        return this._residence;
    }
    //You'll note that I have used the get keyword right before the age and residence methods, this indicates that they are getter methods
   
    //Let's now take a look at using setters, we will create two setters for updating the age and residence properties respectively
    set age(userAge:number){
        if(userAge<=0 || userAge>=200)throw new Error("The age is invalid.");
        this._age=userAge;
    }

    set residence(placeOfResidence:string){
        this._residence=placeOfResidence;
    }


    
}

let firstHuman=new Human("137-084B","Olivier","Sarah",21,"Donholm");
console.log(firstHuman.getFullName());
console.log(firstHuman);
firstHuman.age=25;
console.log(firstHuman.age);
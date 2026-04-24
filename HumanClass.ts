class Human{
    ssn:string;
    firstName:string;
    lastName:string;

    constructor(ssn:string,firstName:string,lastName:string){
        this.firstName=firstName;
        this.lastName=lastName;
        this.ssn=ssn;

    }

    getFullName():string{
        return `${this.firstName} ${this.lastName}.`;

    }
    
}

let firstHuman=new Human("137-084B","Olivier","Sarah");
console.log(firstHuman.getFullName());
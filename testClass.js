class Person{
    
    constructor(personName,personAge){
        this.personName=personName;
        this.personAge=personAge;
    }
    showPersonalInfo(){
        return `This is ${this.personName}, aged ${this.personAge} years.`;
    }
}

const firstPerson=new Person("Reece James",27);
console.log(firstPerson.showPersonalInfo());
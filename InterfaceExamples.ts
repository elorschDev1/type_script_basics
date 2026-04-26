//Interfaces define contracts for the code
//They also provide names for explicit type checking.

//First Example:
interface Professional{
    firstName:string,
    lastName:string,
    residence?:string// this property is optional, if its not a key of the actual object, no error will arise
}

function getFullName(person:Professional){
    if(person.residence)return `${person.firstName} ${person.lastName} stays in ${person.residence}.`;
    return `${person.firstName} ${person.lastName}`;

}
let john={
    firstName:"John",
    lastName:"Legend",
    residence:"Fedha",
    occupation:"Developer"//Note, this is an optional property, but the first two have to be there, otherwise, an error message will be thrown
};

console.log(getFullName(john))

//In the example above, the interface Professional serves as a blue print for the kind of type the person parameter of the getFullName() function should have
//This interface dictates that the argument received by the function should be made up of at least two mandatory properties of type string



/*When working with functions, each parameter is usually assigned a certain type, and whenever the function is called,
the data type of each argument should match that of its respective parameter*/

let displayEmployeeInformation=(employeeName:string,role:string,yearsOfExperience:number):string=>{
    return `${employeeName} has ${yearsOfExperience} years of experience as a ${role}.`
}

console.log(displayEmployeeInformation("Edgar Lorsch","software developer",3));

//Let's take a look at how to work with optional parameters:
//i)To indicate that a parameter is optional, use the syntax: parameterName?:type
//ii)An optional parameter should always come after a required parameter

/*const showPersonsHobby=(personName:string,personAge:number,hobby?:string)=>{
    if(typeof(hobby)!=="undefined")return `Hi, I am ${personName} , I am ${personAge} years old, and my hobby is ${hobby}.`;
    return `Hi, I am ${personName} aged ${personAge}, and I don't have a specific hobby at the moment.`;
}

console.log(showPersonsHobby("Middleware",24,"coding"));*/

//Working with rest parameters
//A rest parameter allows a function to accept zero or more arguments of the specified type
//Rest parameters generally follow these rules:
//1)A function only has one rest parameter
//2)The rest parameter appears as the last in the list
//3)The type of the rest parameter is an array

//First Example:

let getTotal=(...numbers:number[])=>{
    let total=0;
    numbers.forEach((number)=>total+=number);
    return total;
}

console.log(getTotal(12,17,28.5));

//Second Example

let displayTeamMembers=(...players:string[]):string[]=>{
    let teamPlayers=players.map(player=>`${player} is a footballer in the Chelsea FC squad.`);
    return teamPlayers;

}

console.log(displayTeamMembers("Moise Caicedo","Cole Palmer","Reece James","Mac Cucurella"))

//Third Example:

const combine=(...args:(number|string)[])=>{
    let total=0;
    let str="";

    args.forEach((arg)=>{
        if(typeof arg==="number"){
            total+=arg;
        }else if(typeof arg==="string"){
            str+=arg;
        }

    })

    return [total,str]

}

const [total, str] = combine(3, 'Happy', 2, 1, ' New Year');

//console.log({total,str});

//Function Overloading
/*What is function overloading? its what enables us to define multiple signatures for a single function ,
and provide multiple implementations that handles all signatures*/

//It enables a function to handle different types of arguments

//Let's take a simple example, here, a function will be executed in two different ways based on the types of parameters it has

//Let's begin by defining the overloaded signatures

function add(a:number,b:number):number;
function add(a:string,b:string):string;

//Now, this second part is the implementation of the function
function add(a:any,b:any){
    if(typeof a === "number" && typeof b==="number"){
        return a+b;
    }
    else if(typeof a==="string" && typeof b==="string"){
        return a+b;
    }
    throw new Error("Invalid arguments");

}

//console.log(add(12,17));
//console.log(add("Edgar","Lorsch"));
//console.log(add(15,"Edgar"));//In this case, an exception will be thrown, cause there is no functio overload that supports this implementation


//Let's now look at how function overloading works with optional parameters
//When a function is overloaded, the number of required parameters must be the same
//If it has more parameters than the other, you need to make the additional parameters optional

//Let's have a look at the following instance:

function calculateSum (firstDigit:number,secondDigit:number):number;
function calculateSum(firstDigit:number,secondDigit:number,thirdDigit:number):number;

function calculateSum(firstDigit:number,secondDigit:number,thirdDigit?:number){
    if(thirdDigit)return firstDigit+secondDigit+thirdDigit;
    return firstDigit+secondDigit;
}

//console.log(calculateSum(25,33,39));


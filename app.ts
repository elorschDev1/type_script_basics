let fuelCost:number=25; //note, here, the value of the fuelCost variable is considered a decimal number
//console.log(fuelCost);

//Binary numbers begin with a 0 followwed by a lowercase or uppercase letter 'b', see the examples below

let firstBinaryDigit:number=0b100;

let secondBinaryDigit:number=0B01;
//Another thing to note about binary digits is that the digits after the 0b or 0B must either be a 0 or 1

//An octal number begins with 0 followed by the letter o, the digits after 0o are the numbers in the range 0 through 7
let firstOctalDigit:number=0o10;

//Examples of string data 
let developerName:string="Edgar Lorsch";
let developerRole:string="full stack developer";
//console.log(`Hi, I am ${developerName} a ${developerRole}`);

//When working with objects, this is how to  specify the types of each property it has

let employee:{
    firstName:string,
    lastName:string,
    age:number,
    jobTitle:string
}={
    firstName:"Victor",
    lastName:"Wafula",
    age:24,
    jobTitle:"Geologist"
}

//console.log(`This is ${employee.firstName} ${employee.lastName}, he is currently ${employee.age} years of age, and he works as a ${employee.jobTitle}`)

let vehicle:{
    brand:string,
    color:string,
    owner:string,
    plateNumber:string,
    
}={
    brand:"Audi",
    color:"black",
    owner:"Edgar Lorsch",
    plateNumber:"KDB 017L"
};

//console.log(vehicle);

//Let's take a look at how to work with arrays
//When working with arrays, all elements in the array should be of the same data type, if you try mixing the data types of the elements, an error will be thrown

let cast:string[]=['Joey Tribbiani','Chandler Bing','Ross Geller','Monica Geller','Phoebe Buffay','Rachel Green'];
//Note that the cast array purely contains string data,adding an element that's of another type would be erronious

//I'll now have an array tha contains numerical data
let castMemberAges:number[]=[28,28,27,26,26,27];
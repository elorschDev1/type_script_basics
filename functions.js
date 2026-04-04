/*When working with functions, each parameter is usually assigned a certain type, and whenever the function is called,
the data type of each argument should match that of its respective parameter*/
var displayEmployeeInformation = function (employeeName, role, yearsOfExperience) {
    return "".concat(employeeName, " has ").concat(yearsOfExperience, " years of experience as a ").concat(role, ".");
};
console.log(displayEmployeeInformation("Edgar Lorsch", "software developer", 3));
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
var getTotal = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var total = 0;
    numbers.forEach(function (num) { return total += num; });
    return total;
};
console.log(getTotal(12, 17, 28.5));

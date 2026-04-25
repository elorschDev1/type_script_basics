//This will be the class that inherits from the base class
import Mother from "./Mother";
class Daughter extends Mother{
 
    childName:string;

    constructor(nationality:string,age:number,height:number,eyeColor:string,childName:string){
        super(nationality,age,height,eyeColor);// the super() method has to be called whenever a child class inherits from a parent class
        this.childName=childName;


    }
//Here, the original method definition of the parent class has been overriden
   showBioData():string{
    return `${this.childName} is ${this.age} years at the moment.`;

   }

}


const firstDaughter=new Daughter("Kenyan",5,120,"brown","Bianca");
console.log(firstDaughter.showBioData());

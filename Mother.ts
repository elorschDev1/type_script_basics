//I will use this class as the base class for the Daughter class to iherit from
export default class Mother{
    nationality:string;
    age:number;
    height:number;
    eyeColor:string;

    constructor(nationality:string,age:number,height:number,eyeColor:string){
        this.nationality=nationality;
        this.age=age;
        this.height=height;
        this.eyeColor=eyeColor;
    }

    showBioData(){
        return `The person descibed above is of ${this.nationality} origin, aged ${this.age}, standing at ${this.height} centimetres tall, with an eye color of ${this.eyeColor}.`;
    }
}


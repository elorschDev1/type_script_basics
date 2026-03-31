//An enumaration is a group of named constant values

enum Month{
    January,
    February,
    March, 
    April,
    May, 
    June, 
    July, 
    August,
    September,
    October,
    November,
    December
};

const isItSummer=(month:Month)=>{
    let isSummer:boolean;

    switch(month){
        case Month.June:
        case Month.July:
        case Month.August:
        isSummer=true;
        break;


        default:
            isSummer=false;
            break;

    
    }

    return isSummer;

}


console.log(isItSummer(Month.June));
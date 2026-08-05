// switch cases: here if we have one condition  and we have to check with multiple conditoin or cases 
// we used switch case 
let month=2
switch(month){// in the parenthisis of switch we have the key if that key matches with the value means they are in the case that case wil run 
    case 1:
        console.log("Jan");
        break;
        case 2:
            console.log(" feb");// outpur will be feb because the value for case 2 is 2 and the key which is month also contains 2 so
            break;// it is imp to avoid extra code of the switch should not get executed 
        case 3:
            console.log(" march");
            break;
            default:
                console.log(" invalid choice ");
                break;
} 
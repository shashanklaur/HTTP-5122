//#### LAB 4 - FUNCTIONS ####
//PART 3:  WALKING THE DOG 


//################## CREATE YOUR checkTemp FUNCTION
//This function will...check the temp
//It expects to receive...current temp
//It will return...true or false
function checkTemp(currentTemp){                //this function checks the temperature to make sure that it's between -10 and 30, it expects the variable currentTemp and the data type is number
    if (currentTemp > 30 || currentTemp < -10){
    return false;
    } else {
        return true;
    }
}
var userInput = prompt("Please enter current temperature:");
var currentTemp = parseFloat(userInput);
var itsOkay = checkTemp(currentTemp); 
//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS
if (itsOkay){
    alert("You're good, have a nice walk!")
} else { alert("Yikes! That would be animal cruelty and we WILL call PETA")};

//#### LAB 4 - FUNCTIONS ####
//PART 2:  AN AVERAGE FUNCTION
function urAvgFunction(Number1,Number2,Number3,Number4,Number5){

}

//################## CREATE YOUR AVERAGE FUNCTION
//This function takes five numbers and returns their average to one decimal place.
function urAvgFunction(Number1,Number2,Number3,Number4,Number5){
    return (Number1+Number2+Number3+Number4+Number5)/5
}
console.log(urAvgFunction(5,10,15,20,25))
var HTTP5000 = 60;
var HTTP5001 = 90;
var HTTP5002 = 95;
var HTTP5003 = 95;
var HTTP5004 = 90;
//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS

    if (urAvgFunction(HTTP5000,HTTP5001,HTTP5002,HTTP5003,HTTP5004) > 70){
alert("Success")
} else {alert("Review required")}
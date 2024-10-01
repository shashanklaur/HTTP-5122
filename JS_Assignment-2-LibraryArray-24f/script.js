var movie1 = "Gladiator";
var movie2 = "Inception";
var movie3 = "The Dark Knight";
var movie4 = "Fight Club";
var movie5 = "Titanic";
var movie6 = "Avatar";
var movie7 = "Transformers";

var top7 = [movie1,movie2,movie3,movie4,movie5,movie6,movie7];
function userInput(){
    var userInput;
    while (true) {
        userInput = prompt("which top 7 movie would you like?","Please pick a number:1-7");
        if(userInput >=1 && userInput <=7 && !isNaN(userInput)) {
            alert("Number "+userInput+" on the list is: "+top7[userInput -1]);
            break;
        } else {
            alert("Please enter a number between 1 and 7.");
        }
    }
}
userInput();
for(var i = 0; i < top7.length; i++){
    console.log("Movie "+ (i+1) +": " + top7[i] );
}
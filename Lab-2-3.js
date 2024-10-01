//######## LAB 2-3 EMAIL SIGNUP ########
//alert("hey 2.3");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//==== VARIABLES =========
var userinput = confirm("Would you like to join our mailing list?");
if (userinput){
    var email = prompt("Please enter you email address:","me@example.com");
    if (email === null){alert("Thank you, but your emil was not valid.");
    } else {alert("Thank you, our next newsletter will be sent to "+ email +".");
    } else {alert("Thank you, we will not bother you again.");
    }
}

//==== LOGIC =============
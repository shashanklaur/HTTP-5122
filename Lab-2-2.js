//######## LAB 2-2 LOGIN ########
//1. LINK THIS JS FILE TO THE HTML FILE
//alert("hey 2.2");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE

//====VARIABLES===============
//2. CREATE NECESSARY VARIABLES
var username = "dart"	// Correct user name
var password = "vader"	// Correct password
var inputname	// user name input
var inputpassword	// password input



//====LOGIC===================
//3. CREATE POPUP BOX FOR USERNAME
var inputname = prompt("Please enter your username");
//4. OUTPUT PROVIDED USERNAME TO JS CONSOLE
console.log(inputname);
//5. CREATE POPUP BOX FOR PASSWORD
var inputpassword = prompt("Please enter your password");
//6. OUTPUT PROVIDED PASSWORD TO JS CONSOLE
console.log(inputpassword);
//7. CHECK IF PROVIDED USERNAME AND PROVIDED PASSWORD MATCH THE STORED USERNAME/PASSWORD
if (inputname === username && inputpassword === password)
//8. IF THEY MATCH, POPUP SUCCESS MESSAGE AND OUTPUT TO CONSOLE
{alert("Welcome back " + inputname +"!");
console.log("Login successful");
//9. IF THEY DON'T MATCH, POPUP INVALID MESSAGE & OUTPUT TO CONSOLE
} else {alert("Invalid username/password");
console.log("Login Fail")}
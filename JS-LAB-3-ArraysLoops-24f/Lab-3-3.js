//LAB 3 - ARRAYS & LOOPS - PART 3

//PART 3 - SHOPPING CART SHIPPING
//==== VARIABLES ========
var CART = [];
var TOTAL = 0;
var THRESHOLD = 35;
var USERINPUT;
//==== LOGIC ========
//CHECK FOR ITEMS UNTIL THRESHOLD IS MET.
while (TOTAL < THRESHOLD)
	//GET ITEM COST FROM USER
	{USERINPUT = prompt("Please enter the Price of the item:");
	
	//CONVERT USER INPUT TO A NUMBER
	var ITEMCOST = parseInt(USERINPUT);
	
	//ADD ITEM COST TO RUNNING TOTAL VARIABLE
	TOTAL+= ITEMCOST;
	
	//PUSH ITEM COST TO CART ARRAY
	CART.push(ITEMCOST);}
	
	


//SEND POPUP MESSAGE TO USER
alert("Your shipping for this order will be free!");

//SEND OUTPUT TO CONSOLE
console.log("Item prices: " + CART.join(" | "));

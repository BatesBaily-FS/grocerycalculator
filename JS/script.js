// Baily Bates
//  01/20/2024
// 2.2 Code Excercise 03: Let's go shopping

// alert commands
// alert("JS file is connected properly");
alert("Welcome to my virtual store, lets go shopping!");
alert("I will ask you about items you are intrested in buying and will calcuate a reciept for you.");

// prompts for itemOne begins
// prompt for item name
let itemOne = prompt("What is the name of the first item you would like to purchase?");
// prompt for item cost
let itemCost = prompt("How much does each " +itemOne +" cost?");
// prompt for amount of item
let itemAmount = prompt("How many "+itemOne +" would you like to purchase?");
// calcating out item total
let itemTotal = itemAmount * itemCost;

alert("Thanks for answering questions about your first item. Lets work on your next item!");

// Prompts for itemTwo begins
// prompt for itemTwo name
let itemTwo = prompt("What is the name of the second item you would like to purchase?");
// prompt for itemTwo cost
let costItem = prompt("How much does each " +itemTwo +" cost?");
// prompt for amount of itemTwo
let amountItem = prompt("How many "+itemTwo +" would you like to purchase?");
// prompt for sales tax
let salesTax = prompt("Final Question, what is the sales tax in whole number form?");

// calcating out itemTwo total cost
let totalCost = amountItem * costItem;

// calcating subtotal items 
let subTotal = itemTotal + totalCost;

// calcating sales tax
let taxTotal = subTotal * salesTax;

// convert sales tax
let taxConversion = subTotal/100;
let finalTax = taxConversion * salesTax;

// calcating grand total
let grandTotal = subTotal + finalTax;



// console begins

// welcome messsage for user
console.log("Thank you for shopping with us!");
// all info for first item
console.log(+itemAmount+" "+itemOne+ " "+ "@" +"$"+itemCost+  "=" +" "+"$"+itemTotal);
// all info for second item
console.log(+amountItem+" "+itemTwo+ " "+ "@" +"$"+costItem+ "=" +" "+"$"+totalCost);
// subtotal 
console.log("Subtotal Before Tax = "+"$"+subTotal);
// sales tax
console.log(+salesTax+"% " +"Sales Tax =" +" $"+finalTax);
// grand total
console.log("Grand Total ="+" $" +grandTotal);

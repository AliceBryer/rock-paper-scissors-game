console.log("Test");
// store the values of wins, losses and ties 

var wins=0;
var ties=0;
var losses=0;
// writing the array
var options=["R","P","S"];

function main() {
// Take user input
 const userOption = window.prompt("Please make your pick") ?? "";
 const capitalizedUser =userOption

// computer picks a choice at random
const random = Math.floor(Math.random() * options.length);
const computerOption = options[random];
console.log(computerOption);
}
// return a win or lose value (compute who has won)
if (userOption === computerOption) {
window.alert("Its a tie");
ties++;
}

// present user with a play again option
// store the values of wins, losses and ties 

// Hint :: alert(), confirm(), and prompt()
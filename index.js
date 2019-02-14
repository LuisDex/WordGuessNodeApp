//Initializes the variables for the required modules
var word = require("./Word.js");
var inquirer = require("inquirer");

//Initializes the variables that will be used throughout the game for functionality and aesthetics
var guesses = 10;
var computerChoices = ["Doug", "Roger", "Skeeter", "Norbert", "Dagget", "Rocko", "Heffer", "Filbert", "Stimpy", "Ren", "Aang", "Katara", "Toph", "Sokka", "Gir", "Zim", "Dib", "Timmy", "Cosmo", "Wanda"];
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var userGuess = [];
var divider = "\n================================================================================";

//Main function that displays the word as it is guessed, takes in the user's guess, verifies it and runs until game is won or the guesses have reached 0
function wordGame(x)
{
  x.displayAll();
 
//Here the app checks if there are still guesses left and if the "win" status has been met. 
if(guesses > 0 && !x.checkWin())
{
 inquirer.prompt([
  {
    type:"input",
    name: "guess",
    message: divider + "\n Welcome to the NickToons Word Guess Game!! What letter will you guess?"
  }
 ]).then(function(response)
 { 
  //Here the app checks the response from the user for 3 things: If it is a letter, if it hasn't been used before and if it is just 1 character
  //If the conditions are met, the game checks the response and continues to take answers
   if(alphabet.includes(response.guess) && !userGuess.includes(response.guess) && response.guess.length === 1)
   {
    guesses--;
    userGuess.push(response.guess);
    x.checkAnswer(response.guess);
    console.log(divider + "\nYou have " + guesses + " guesses left. Keep Going." + divider);
    wordGame(x);
   }else{
   //If the conditions are not met, Mr. Horse disapproves of you. 
     console.log(divider + "\nMr. Horse doesn't like that answer, try again." + divider);
     wordGame(x);
   }
 });
}else{

//Once the answer is checked and processed, the game checks if the user has won or if they have no more guesses left. Then asks if they want to play again
if(x.checkWin())
{
  console.log(divider + "\nYou win! Excellent!" + divider);
}else{
  console.log(divider + "\nYou didn't guess the word :(" + divider);
  console.log(divider + "\nMaybe you could ask Wanda for help next time instead of Cosmo :(" + divider); 
}
inquirer.prompt([
  {
    type: "confirm",
    name: "again",
    message: divider + "\nCare to play again?"
  }
]).then(function(response){
  //If the user decides to play again, the game resets certain variables and calls the newGame function
  if(response.again)
  {
    guesses = 10;
    userGuess = [];
    newGame();
  }
});
};
};

//The newGame function initializes the game by selecting a random word from the array of options and then passes it to the Word Constructor to begin the game.
function newGame()
{
  var location = Math.floor(Math.random() * computerChoices.length);
  var compWord = new word(computerChoices[location]);
  wordGame(compWord);
}

//Calls the newGame function to start the game
newGame();
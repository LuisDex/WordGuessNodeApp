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
  
   if(alphabet.includes(response.guess) && !userGuess.includes(response.guess)){
    guesses--;
    userGuess.push(response.guess);
    x.checkAnswer(response.guess);
    console.log(divider + "\nYou have " + guesses + " guesses left. Keep Going." + divider);
    wordGame(x);
   }else{
     console.log(divider + "\nMr. Horse doesn't like that answer, try again." + divider);
     wordGame(x);
   }
 });
}else{

if(x.checkWin())
{
  console.log(divider + "\nYou win! Excellent!" + divider);
}else{
  console.log(divider + "\nYou didn't guess the word :( " + divider);
}
inquirer.prompt([
  {
    type: "confirm",
    name: "again",
    message: divider + "\nCare to play again?"
  }
]).then(function(response){
  if(response.again)
  {
    guesses = 10;
    userGuess = [];
    newGame();
  }
});
};
};

function newGame()
{
  var location = Math.floor(Math.random() * computerChoices.length);
  var compWord = new word(computerChoices[location]);
  console.log(compWord);
  wordGame(compWord);
}

newGame();
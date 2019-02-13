var word = require("./Word.js");
var inquirer = require("inquirer");
var guesses = 10;
var computerChoices = ["Doug", "Roger", "Skeeter", "Norbert", "Dagget", "Rocko", "Heffer", "Filbert", "Stimpy", "Ren", "Aang", "Katara", "Toph", "Sokka", "Gir", "Zim", "Dib", "Timmy", "Cosmo", "Wanda"];
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var userGuess = [];

function wordGame(x)
{
  x.displayAll();
 
if(guesses > 0 && !x.checkWin())
{
 inquirer.prompt([
  {
    type:"input",
    name: "guess",
    message: "\nGuess the word! What letter will you guess?"
  }
 ]).then(function(response)
 { 
   console.log(response.guess);
   console.log(alphabet.includes(response.guess));
   if(alphabet.includes(response.guess)){
    guesses--;
    userGuess.push(response);
    x.checkAnswer(response.guess);
    console.log("\nYou have " + guesses + " guesses left. Try again");
    wordGame(x);
   }else{
     console.log("\nIncorrect character, try again.");
     wordGame(x);
   }
 });
}else{

if(x.checkWin())
{
  console.log("\nYou win! Excellent!");
}else{
  console.log("\nYou didn't guess the word :( ")
}
inquirer.prompt([
  {
    type: "confirm",
    name: "again",
    message: "\nCare to play again?"
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
//Initializes the Letter constructor to a variable
var letter = require("./Letter.js");

//Base Word Constructor that takes in a string word and splits it into letters.
var Word = function(newWord){

//Takes the string and turns it into an array of letters
this.allLetters = newWord.split("");
//Initializes the array that will have all the Letter Constructors
this.arrayChar = [];

//Cycles through every letter in the allLetters array and turns it into a Letter then pushes into the arrayChar
for(var i=0;i<this.allLetters.length;i++)
{
 this.arrayChar.push(new letter(this.allLetters[i]));
};

//Cycles through arrayChar and displays each letter by checking its "show" status
this.displayAll = function()
{
  var showWord = "\n";
  for(var x=0; x<this.arrayChar.length;x++)
  {
   showWord = showWord + this.arrayChar[x].showIt();
  };
  console.log(showWord);
};

//Checks the all the letters to see if they have been guessed. If even 1 is not shown then it returns false. Otherwise it returns true
this.checkWin = function(){

  var winning = true;

  for(var i = 0;i<this.arrayChar.length;i++)
  {
    if(this.arrayChar[i].guessed === false)
    {
      winning = false;
    }
  };
 return winning;
};

//Checks every letter in the word with the user's answer to see if they match. After that it informs the user if they guessed right or wrong
this.checkAnswer = function(t)
{
  var isCorrect = false;
  for(var z=0; z<this.arrayChar.length;z++)
  {
    if(this.arrayChar[z].checkGuess(t))
    { 
      isCorrect = true;
    };
  };
  if(isCorrect)
  {
   console.log("\nYou're Correct!");
  }else{
      
      console.log("\nTry Again!");
  }
};
}

//Exports the Word constructor and its functions to use in the index.js app
module.exports = Word;
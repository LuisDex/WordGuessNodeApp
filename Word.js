var letter = require("./Letter.js");
var Word = function(newWord){

this.allLetters = newWord.split("");

this.arrayChar = [];

for(var i=0;i<this.allLetters.length;i++)
{
 this.arrayChar.push(new letter(this.allLetters[i]));
};

this.displayAll = function()
{
  var showWord = "\n";
  for(var x=0; x<this.arrayChar.length;x++)
  {
   showWord = showWord + this.arrayChar[x].showIt();
  };
  console.log(showWord);
};

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

module.exports = Word;
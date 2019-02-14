//Main constructor function that takes in a string character to use in different functions
var Letter = function(letterGuess){
 
//Sets all characters to lowercase and the "guessed" status to false so that the letter starts off hidden
 this.letterGuess = letterGuess.toLowerCase();
 this.guessed = false;
 //function that shows the letter if it has been guessed, if not then it displays an underscore
 this.showIt = function()
 {
  if(this.guessed)
  {
    var show = " " + this.letterGuess + " ";
   return show;
  }else{
    var show = " __ ";
    return show;
  }
 };
 //Checks the user's guess to see if it matches the letter. If it does then it switches the "guessed" status to true so that it is shown when displayed. 
 this.checkGuess = function(x){
     if(x === this.letterGuess)
     {   
         this.guessed = true;
         return true;
     }
 };
}

//Exports the Letter constructor and its functions to use in the Word.js app
module.exports = Letter;
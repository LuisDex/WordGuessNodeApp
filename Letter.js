var Letter = function(letterGuess){
 
 this.letterGuess = letterGuess.toLowerCase();
 this.guessed = false;
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
 this.checkGuess = function(x){
     if(x === this.letterGuess)
     {   
         this.guessed = true;
         return true;
     }
 };
}

module.exports = Letter;
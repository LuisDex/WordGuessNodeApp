# WordGuessNodeApp

### Overview of App Functions

This app is a Node.js version of the previous Word Guess project that was uploaded previously to my Repositories.

The apps is broken down into 3 distinct files that interact together to run the game:

1. **index.js** 
1. **Word.js** 
1. **Letter.js**
 
## Functionality

### index.js

Index.js is the main app of the Word Guess game and the one that calls towards the different functions and constructors in order to correctly run the game.

It also uses the inquirer.js node module to prompt the user to input the letter they would like to guess, as well as prompting the user when the current game is finished to see if they would like to play again without the need to run the initial instructions again.

#### Functions of index.js

1. **newGame(x)** - The newGame() function, when called, grabs a word from the *computer_choices* array by generating a random position with the *Math.random* method. It then passes that random word to the *Word Constructor* in order to split it into it's respective characters and in order to be displayed properly. Once that is done, the *wordGame(x)* function is called with the newly created Word object.

1. **wordGame(x)** - This function is where the majority of the game's functionality is contained. This function will display the word that was passed into it with the *displayAll()* function contained within the Word constructor. Following that the function will validate the wether or not the user still has *guesses* left and wether or not the user has won the game. If they haven't and still have guesses then the game will prompt them to guess a letter. 

Once the user has submitted an answer, the function will check for 3 things: If the answer has been used before, if the answer is a letter, and if the answer is a single letter. If any of these fail, then Mr. Horse will comment on his dislike of this answer and request a new answer. If the answer passes these points, then the number of guesses is reduced by 1, the answer is pushed into the *userGuess* array and then it is verified with all the letters in the Word with the *checkAnswer(x)* method. Finally the function calls itself to continue the game.

### Word.js

Word.js is the main constructor that the Word Guess game depends for functionality. It separates the word that is passed to it into characters, then it creates a *Letter* constructor for each of those characters and saves them to an array for later use. It has methods for displaying each letter or for displaying unguessed letters, as well as methods that check the answers given by the user as well as checking if the user has won or not.

#### Methods of index.js

1. **displayAll()** - This method will display a string that is created by cycling through each Letter constructor in the Word and displaying it based on its **guessed** status.

1. **checkWin()** - This method will return **true** or **false** after cycling through each Letter constructor in the Word and verifying if any of those Letters are still hidden. If any are, then it returns **false** as the user hasn't won yet. Otherwise it returns **true**.

1. **checkAnswer()** - This method will cycle through each Letter in the constructor and use the *checkGuess()* method to verify if the letter matches the user's response. It then displays a message corresponding to a correct or incorrect answer.

### Letter.js

Letter.js is the base constructor for the Word Guess game and is used for two purposes: To either hide or display the letter that is assigned to it based on if it has been answered or not, and to check the user's answers when it's *checkGuess()* method is called by the corresponding Word object.

#### Methods of index.js

1. **showIt()** - This method, when called, will display either the letter that is assigned to the constructor or a ' __ ' based on wether or not the letter has been guessed.

1. **checkGuess()** - This method, when called, checks the user's answer with the letter that is assigned to this constructor. If it matches then it switches the **guessed** status to **true** and thus revealing the letter when it is displayed.

// import / hooks
import { useCallback, useEffect, useState } from "react";
// Hey, it's "useCallback", not "useCallBack". Very weird, right?

// import / style
import "./App.css";

// data / words
import { wordsList } from "./data/words";
// import the "Const", not the "File Name"

// import / components
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

const stagesOfTheGame = [
  { stagesId: 1, stageName: "stageStart" },
  { stagesId: 2, stageName: "stageGame" },
  { stagesId: 3, stageName: "stageCover" },
];

const guessesQuantity = 3;
// const made so the quantities get into only one place, thus allowing us to change the amount easier

function App() {
  const [gameStage, setGameStage] = useState(stagesOfTheGame[0].stageName);
  // I assume it's [0] because it would mean the first Item on the "stagesOfTheGame" Array, in this case, "stageStart". Or that, or it means that it Starts on the First Item of the Array, with the potential of going to the others[Seems to be kind of it].
  const [dataWords] = useState(wordsList);

  const [choosenWord, setChoosenWord] = useState("");
  const [oneRandomCategory, setOneRandomCategory] = useState("");
  const [justLetters, setJustLetters] = useState("");
  // Error: Was "([])" instead of: "("")"

  const [rightLetters, setRightLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);

  const [guessesTries, setGuessesTries] = useState(guessesQuantity);
  // The Number of Chances the Player has before losing the Game

  const [playerScore, setPlayerScore] = useState(0);

  const oneRandomCategoryUpperCase =
    oneRandomCategory.charAt(0).toUpperCase() + oneRandomCategory.slice(1);
  // Pretty Complicated for such a simple thing. Might as well have gone to "data" to change the Words First Letter myself...

  const pickWordAndCategory = useCallback(() => {
    // pick a Random Category
    const justCategories = Object.keys(dataWords);
    // I still don't quite get how the "Object.keys(dataWords)" works. Maybe it's just the way to take the stuff from "dataWords"?
    const onlyCategory =
      justCategories[
        Math.floor(Math.random() * Object.keys(justCategories).length)
      ];

    // console.log(7);
    // console.log(justCategories);
    // console.log(8);
    // console.log(onlyCategory);

    // Oh, yeah. It wil only show in the Console when we click the StartScreen button, as it is
    // Anyway, seems to be working. One will show the Array with the possible Categories, and one will Pick the Random Category[not the word]. Now, how do we take the Word, too...?

    // pick a Random Word
    const onlyWord =
      dataWords[onlyCategory][
        Math.floor(Math.random() * dataWords[onlyCategory].length)
      ];

    // console.log(9);
    // console.log(onlyWord);
    // Now this one takes the Random Word. Though, I still don't get how it works....

    return { onlyWord, onlyCategory };
    // Not sure why the "return" here... Maybe it's because we will need it in other things? It still seems to be working properly if we circle it without the "return"... More tests will be needed
    // The Error of the "[]" instead of the "{}" again
  }, [dataWords]);

  // starts the Game Stage
  const startGame = useCallback(() => {
    // clear all letters for new Games and when the Player completes a word
    clearLetterStates();
    // Maybe that's why he "split" it? I mean, the "clear Letter" things. Instead of putting it on the "restartGame", he put it in this const, so it doesn't reset the "score" together with it, too

    // pick word and category
    const { onlyWord, onlyCategory } = pickWordAndCategory();
    // Probably the way he used the "return". Now, we have their consts available outside of the "pickWordAndCategory" for other things

    // console.log(10);
    // console.log(onlyWord, onlyCategory);
    // Seems to be doing "underfined underfined". I wonder why? Edit: It was because the "return" was wrapped in "[]", instead of "{}". Now, it's working properly and is "fusing" them in a single Line, like the console.log() shows. So, for example, it would be: "Wheel car"* and the like.

    // create an array of letters
    let arrayOfLetters = onlyWord.split("");
    // console.log(11);
    // console.log(arrayOfLetters);
    // Wow, that was incredible simple, compared to the rest. We could get an Array of Letters really easily... It's currently like:
    // (6) ['S', 'y', 's', 't', 'e', 'm']
    // So... Now we have the "Category", the "Word", and the" Array of Letters" of the Word in separate "consts"
    arrayOfLetters = arrayOfLetters.map((AllLowerCase) =>
      AllLowerCase.toLowerCase()
    );
    // console.log(12);
    // console.log(arrayOfLetters);
    // Now everything in the "Array" is on "lowerCase", which means now the Players won't have to "Input the Letter in Uppercase" for it to count
    // (6) ['s', 'y', 's', 't', 'e', 'm']

    // fill states < --- Not sure what it means... Maybe it's to avoid it not being used? Or maybe it's just to add the setStates with something... Oh, wait. It's to "give" the written value to a const later. Example:
    // "onlyCategory" will find the Random Category, right? Then, if we put: "setChoosenCategory(onlyCategory)", now, the const "choosenCategory" will ALSO get the Random Category, thus allowing us to use it outside from these places, as it seems to be hard to use them outside of it, otherwise. I mean, we wouldn't be able to make the "propChoosenCategory" even work if we wrote "{onlyCategory}" inside of it. I will rename it to avoid confusion
    setChoosenWord(onlyWord);
    setOneRandomCategory(onlyCategory);
    setJustLetters(arrayOfLetters);
    // Odd... Should it really be "justLetters" here? I mean, it IS the same place from where the "setJustLetters" came from... Edit: He changed it to: "arrayOfLetters"
    setGameStage(stagesOfTheGame[1].stageName);
    // Will switch the Stage to the "Game Stage" when the "StarScreen Button" is Clicked
    // Also, we don't want the State changing without loading the other things, so it must stay in the lower parts of the function
  }, [pickWordAndCategory]);

  // console.log zone - 1
  // console.log(1);
  // Oh, yeah. You can't have the "1" thing, isn't it? So, a "// console.log(01)" won't work here
  // console.log(stagesOfTheGame);
  // console.log(2);
  // console.log(gameStage);
  // The gameStage is called "stageStart" on the Console, implying that it really is "on this stage"
  // console.log(3);
  // console.log(dataWords);
  // console.log(4);
  // console.log(startGame);
  // console.log(5);
  // console.log(setGameStage);
  // console.log(6);
  // console.log(pickWordAndCategory);
  // console.log(13);
  // console.log(justLetters);
  // console.log(14);
  // console.log(rightLetters);
  // Soo far, these last two are... Empty. How weird...
  // console.log(choosenWord)

  // process the letter input
  const verifyLetter = (verifyProp) => {
    // setGameStage(stagesOfTheGame[2].stageName);
    // What? Why [3]?? Is it even a Number available? Also, why it's on the "verifyLetter" spot? Edit: Oh, it was when he messed the Number up... The right one is 2, when it will get to the "third stage". Note: He removed it, otherwise, you wouldn't be able to click on the Button without going to the third stage
    // console.log(verifyProp);
    // seems to be working properly, as it is showing in the "Log" the written letter. Only problem, is that it can be repeated, making lot's of "(22) v" kind of thing

    const acceptableLetters = verifyProp.toLowerCase();
    // To make the "Input" all "lowerCase" as well, I presume? It makes sense, if in the "arrayOfLetters" they could miss by not putting an "upperCase", it makes sense to think that if the "arrayOfLetters" is all "lowerCase" and they put an "upperCase", it might not work

    // check if letter has already been utilized
    if (
      rightLetters.includes(acceptableLetters) ||
      wrongLetters.includes(acceptableLetters)
    ) {
      return;
      // Maybe the "return" is so it can be used later for the Right and Wrong letter spots?
    }

    // push guessed letter or remove a chance
    if (justLetters.includes(acceptableLetters)) {
      setRightLetters((currentRightLetters) => [
        ...currentRightLetters,
        // Oh, if we delete that, they won't make it to be an Array, thus, will receive *only* one Letter per time. Example: [t, i, m, e] would be (1) [t], and if you wrote another letter it would be (1) [i]
        acceptableLetters,
      ]);
    } else {
      setWrongLetters((currentWrongLetters) => [
        ...currentWrongLetters,
        // Oh, if we delete that, they won't make it to be an Array, thus, will receive *only* one Letter per time. Example: [t, i, m, e] would be (1)[t], and if you wrote another letter it would be (1) [i]
        acceptableLetters,
      ]);

      setGuessesTries((reducedGuess) => reducedGuess - 1);
      // This code made it so when they Play a Wrong Letter, the Guesses Amount get's reduced by -1... It's odd, as I don't see what decides what is a Wrong one or what is not... Maybe it's the "if(justLetters.includes(acceptableLetters))"? I mean, if it includes, then it goes to the Box, but if it doesn't, then it reduces a guess??? It doesn't even make that much sense, as both codes below it are the same
    }

    // console.log(rightLetters);
    // console.log(wrongLetters);
    // Empty. Empty until you Input a Letter. Then, it will make an "Delayed Array" of the Right letters and Wrong letters
  };

  const clearLetterStates = () => {
    setRightLetters([]);
    setWrongLetters([]);
  };

  // check if guesses got to be less than 1
  // "useEffect" executes only once, without rendering it again
  useEffect(() => {
    if (guessesTries <= 0) {
      // reset all states
      clearLetterStates();
      // So it can be replayed with everything in the right place

      setGameStage(stagesOfTheGame[2].stageName);
    }
    // Will go to the Third Stage of the Game when the Tries get to 0
  }, [guessesTries]);

  // check win condition
  useEffect(() => {
    const uniqueLetters = [...new Set(justLetters)];
    // Not too sure...

    // win condition
    if (
      rightLetters.length === uniqueLetters.length &&
      gameStage === stagesOfTheGame[1].stageName
    ) {
      // Odd, was that what was breaking it? Seems like so to me... Whenever you delete the "&& gameStage === stagesOfTheGame[1].stageName", it just breaks the startScreen and makes the thing go straigth to the "game stage". Maybe that was because of this: "startGame();"

      // "if" the "rightLetters" match the length of the "uniqueLetters", then it will execute this code... This is weird. Weren't both of the very similiar, to begin with?? Maybe it works because the "rightLetters" are the ones that go fill the square? I can't tell... ... Maybe it's because it's a "combo", actually. I mean, if we have the one that goes to the squares, and we have the one that has all unique letters, then it might work...?

      // console.log(rightLetters);
      // console.log(uniqueLetters);
      // Oh, I see... The "rightLetters" Array starts empty. You *fill* it with time, so the Letters keep getting added when you do right, and, as you can't repeat a word, the amount will always be the same. In the end, the "rightLetters" would be: [t, o, m, a, t], just like the "uniqueLetters", as the "o" is placed twice, anyway
      // By the way, it wasn't showing in the console because the const wasn't being executed

      // add score
      setPlayerScore((increasePlayerScore) => (increasePlayerScore += 100));
      // Will increase the Player Score

      // restart new game with new word
      startGame();
      // Odd... But anyway, it will restart it, while keeping the Score. Just found it weird that it doesn't let you go to the start screen anymore, and, sometimes, the word already comes complete, somehow... Like, if you wrote "a" in the last word, the next word will keep it and won't let you keep playing, as it will freeze it there
    }

    // console.log(rightLetters);
    console.log(uniqueLetters);

    // console.log(uniqueLetters);
    // Shows the "onlyWord"... Odd, did it change anything, really? Oh, it did. The name is not "uniqueLetters" for nothing. If the word is: "Banana", then, this const will make it to be: "Ban", because they don't repeat themselves, so they are 'unique'
  }, [rightLetters, justLetters, startGame, gameStage]);

  // restart the Game so they can Play again
  const restartGame = () => {
    setPlayerScore(0);
    setGuessesTries(guessesQuantity);
    // setRightLetters([])
    // setWrongLetters([])
    // Not sure why he didn't just put them here, as it would reset t, anyway

    setGameStage(stagesOfTheGame[0].stageName);
    // Will restart the Game
  };

  return (
    <div className="App">
      {gameStage === "stageStart" && <StartScreen propStartGame={startGame} />}
      {/* A Prop was given so we can activate it on the StartScreen Button */}
      {gameStage === "stageGame" && (
        <Game
          propVerifyLetter={verifyLetter}
          propChoosenWord={choosenWord}
          propOneRandomCategory={oneRandomCategoryUpperCase}
          propJustLetters={justLetters}
          propRightLetters={rightLetters}
          propWrongLetters={wrongLetters}
          propGuessesTries={guessesTries}
          propPlayerScore={playerScore}
        />
      )}
      {gameStage === "stageCover" && (
        <GameOver propRestartGame={restartGame} propPlayerScore={playerScore} />
      )}
      {/* Set the "gameStage" to be all of the Game Stages. It also means that we can switch the Pages now with this Command, as long as we switch the Number Above on gameStage = "[0]"... That's great because it's a way to allow multiple Pages in one place, soo easily like that */}
    </div>
  );
}

export default App;

// 1 - Make the Components, CSS, Data Folder, and Import them

// 2 - Make the "Const stagesOfTheGame" above the "function App", then make the const "[gameStage, setGameStage]" below the "function App". Basically, start with the Stages quick(?)

// 3 - Use the Const "gameStage" below the "return div" to set it to be the "StartScreen", the "Game", and the "GameCover". Basically, make it to be all of the Game Stages

// 4 - Make a const of the words, called: "[dataWords] = useState(wordsList)", so we can get access to the words, I assume

// 5 - Create an const called: "startGame", which will Start the Game Stage.

// - Put: "setGameStage(stagesOfTheGame[1].stageName)" inside it. The [1] refers to the Game Stage

// - Add an Prop to the Start Screen and input the "startGame" const inside it, so we can activate it later: "<StartScreen propStartGame={startGame} />"

// - Add the "Parameter" of the Prop on the StartScreen page: "({ propStartGame })", and then add the "onClick" on the Button, with the Prop Name inside it, so we can activate the "startGame" function on click: "<button onClick={propStartGame}>"

// 6 - Do the 5° Step again, but make 2 new const and do the step in a way that can circle through every Stage of the Game by clicking the Buttons. In this case, we made the "verifyLetter" and "restartGame".

// 7 - This time, make a way to get the "Category", the "Word", and the "Array of Letters of the Word" at Random

//  First, make a const for it:
//  const pickWordAndCategory

//  Now, make an const to get all of the Categories:
//  const justCategories = Object.keys(dataWords)

//  Next, an const that will pick a Single Category at Random:

//  const onlyCategory = justCategories[Math.floor(
//  Math.random() * Object.keys(justCategories).length
//  )]

//  This time, an const that will pick a "Single Word" of the "Single Random Category" at Random:

//   const onlyWord = dataWords[onlyCategory][Math.floor(
//  Math.random() * dataWords[onlyCategory].length
//  )]

// make an "return" with the Single Category and Single Word const inside it, so we can use it outside of this function soon:

//  return { onlyWord, onlyCategory }

// A const now inside the "startGame" so we can use them inside of it, instead of only on the "pickWordAndCategory" function. The "return" from before will allow it

//  const { onlyWord, onlyCategory } = pickWordAndCategory()

// Make an let, and make it work as an "Array of Letters" of the Random Word[onlyWord], so it can be used in the Game. It's really simple to do:

// let arrayOfLetters = onlyWord.split("")

// Now, the "onlyWord" will come in a Array of (8) [S, e, p, a, r, a, t, e] letters

// The game won't accept the Input of the first Letter Uppercase, so we will have to change that so it all can be done in Lower Case. Luckily, it's not too hard:

// Just type: "arrayOfLetters = arrayOfLetters.map((AllLowerCase) => AllLowerCase.toLowerCase())"

// And it's done, now we have the Words and Categories working properly ready to be used

// 8 - Transfer all of the Info that we currently have to the "Game" page

// First, make the "props" and their Corresponding consts. Example:

// <Game
// propVerifyLetter={verifyLetter}
// propChoosenWord={choosenWord}
// propOneRandomCategory={oneRandomCategoryUpperCase}
// />

// Then, put then all in the "Game" page 'desconstructor', example:

// const Game = ({
//   propVerifyLetter,
//   propChoosenWord,
//   propOneRandomCategory,
// )}

// Next, we will fill the Information that is missing with the "props" we just got:

// <span>Score: {propPlayerScore}</span>
// Category of the Word: <span>{propOneRandomCategory}</span>
// <p>You still have {propGuessesTries} Chance(s) to Guess.</p>

// Here comes the Complicated part of this Section. This time, we need to make it so the "Blank Squares" match the Amount of Letters that the "Choosen Word" has. To do that, we will use the "map" code:

// {propJustLetters.map((letterSquare, uniqueShowKey) => (
//   propRightLetters.includes(letterSquare) ? (
//     <span key={uniqueShowKey} className="styleLetter">
//       {letterSquare}
//     </span>
//   ) : (
//     <span key={uniqueShowKey} className="styleBlankSquare">
//
//     </span>
//   )
// ))}

// As we can see, the "propJustLetters" represents the "arrayOfLetters" from before, the one who make's the Random word be written like (4) [t, h, i, s]. And the "propRightLetters" are the letters that were guessed right. We don't have soo much Info on it, as it is not complete yet... So, one can consider it "Empty" for now.

// We can also consider that the "map" of the "propRightLetters" means the [s, e, p, a, r, a, t, e] letters, ready to be used in this case. So, "if" "propRightLetters" has / includes one of the separate letters, then this Code will be Executed and put one of the letters in one of the "spans"(?). We will have to see more of it to be sure, as I'm not sure if we can make only the letters appear, without the "Blank Squares"

// Now, we make an similiar thing to the last one, but for the "Wrong Letters". It will be used when the 'Player' Input's the wrong Letter, showing that he missed and that said letter was already used:

// {propWrongLetters.map((showWrongLetters, uniqueWrongKey) => (
//   <span key={uniqueWrongKey}>{showWrongLetters},</span>
// ))}

// Maybe we can use this Code later to test the last one in more detail? I honestly don't know...

// 9 - This time, it was something that we didn't understand yet... Maybe because it wasn't complete? Anyway, here it goes:

// Import the useRef and make an const with a "useRef(null)":

// import { useState, useRef } from "react";
//   const letterInputRef = useRef(null)

// I still don't know why, but let's keep going

//  Make some changes to the verifyLetter const from before, by adding an "parameter" and removing the "setGameStage". That's because if they click on the Button to Play their Letter, the Page would just go to the Third Stage

// const verifyLetter = (verifyProp) => {
//   // setGameStage(stagesOfTheGame[2].stageName);
//   // console.log(verifyProp);

// Now, make an const called "handleSubmit", which will be all about preventing the form from reloading when the letter is submitted. Make an "parameter" and put the "preventDefault" on it

// const handleSubmit = (stopReload) => {
//   stopReload.preventDefault()

// Add the "handleSubmit" to the Form:

// <form onSubmit={handleSubmit}>

// Make an const called "[gameLetter, setGameLetter]" on the "Game" page. I believe it is what will be used more on the submit letter part(?)

// const [gameLetter, setGameLetter] = useState("")

// Give the letter Input an onChange which will have the "setGameLetter.target.value", and give the Input the "gameLetter" value:

// onChange={(changeEventE) => setGameLetter(changeEventE.target.value)}
// value={gameLetter}

// I'm still not sure how it works, but I believe it's part to make the chosen letter more specific??
// When I searched about the "Target", that' what it said: "The target property returns the element where the event occured". In this case, the Letter Input shows the Written Letter in the Console. Maybe it's related? Now, the "value" in an Input usually means what would be written on it beforehand, ins't it? It sounds confusing to me...

// Inside the "handleSubmit", give the "propVerifyLetter" the "gameLetter", so the "verifyLetter" can use it's powers or something like that

//   propVerifyLetter(gameLetter)

// Then, below it, add the command:

//   setGameLetter("")

// to clear the Box when the Submit is made. I believe that it's from where the "value={gameLetter}" comes into Play here, as the "gameLetter" is empty, to begin with(?), or maybe it just clears it because the "("")" is an empty string[More likely]

// Now, put this below the last command:

// letterInputRef.current.focus()

// I don't know what it does yet...

// Lastly, place this on the "Box Letter Input"

// ref={letterInputRef}

// Still no idea what it is about. Maybe we could rewatch the Video Number 11? Maybe, just maybe he could give some good explanation about it which I might've missed

// 10 - On the "verifyLetter", make a const for the "accepted letter type", and make it do the "toLowerCase":

// const acceptableLetters = verifyProp.toLowerCase();

// It's done this way because if they put an "upperCase" in the Input Field, it would be troubling if they lost their Chances for Free, right? So, this way, it will make it all go "toLowerCase", to match the Word "type of letter".

// Now, we will make an "if" to "check if letter has already been utilized":

// if (
//   rightLetters.includes(acceptableLetters) ||
//   wrongLetters.includes(acceptableLetters)
// ) {
//   return;
// }

// I don't know how it all works, but without it, the Letters don't even make it to the "blankSquare" Boxes. Besides, he mentioned it being a "Lock" so the Player doesn't loses Chances for nothing, so it works as a way to verify, too

// Now, as he wrote it, we will "push guessed letter or remove a chance":

// if (justLetters.includes(acceptableLetters)) {
//   setRightLetters((currentRightLetters) => [
//     ...currentRightLetters,
//     acceptableLetters,
//   ]);
// } else {
//   setWrongLetters((currentWrongLetters) => [
//     ...currentWrongLetters,
//     acceptableLetters,
//   ]);

//   setGuessesTries((reducedGuess) => reducedGuess - 1)
// }

// Still not sure how it goes. It's weird about how it was "soo simply" before, now it got all difficulty out of nowhere. Maybe rewatching the Videos would be for the best, after all

// 11 - Make an way inside "verifyLetter" to reduce the tries amount by 1 when the Player misses:

// setGuessesTries((reducedGuess) => reducedGuess - 1)

// Use the "useEffect" outside of a const, and make an "if" to change the state of the Game to the Third one if the Tries get to "0":

//   useEffect(() => {

// if(guessesTries <= 0) {
//
//   setGameStage(stagesOfTheGame[2].stageName)
// }
//
// }, [guessesTries])

// Now, an const to reset the letters, so they don't get to stay in there when the Game comes back to the Second Stage:

// const clearLetterStates = () => {
//   setRightLetters([])
//   setWrongLetters([])
// }

// And now put this inside the useEffect:

// clearLetterStates()

// Next, on the "restartGame", add an way for it to Reset the Score and Tries Numbers:

// setPlayerScore(0)
// setGuessesTries(guessesQuantity)

// 12 - Make the Game Cover Screen more Complete, by adding the Player Score, so they can see it in the Third Stage:

// propPlayerScore={playerScore}

// 13 - Make and "useEffect"

//  useEffect(() => {
//  
// }

// Inside it, add an const called: "uniqueLetters", which will do something hard to explain, but it wll work

//    const uniqueLetters = [...new Set(justLetters)];

// Now make an "if" that will be used to reset the Blank Square for when the Player finish's a word:

//    if (
//      rightLetters.length === uniqueLetters.length &&
//      gameStage === stagesOfTheGame[1].stageName
//    ) {

// This means that, if the "rightLetters[Egg]", match the "uniqueLetters[Eg]" length, then the Code will be executed. Whenever the Player guesses right, the amount will increase by [1], and, as Duplicated Letters are already spent after using only once, both will have only [2] Letters in the Array in this case. You can't input a letter that is not correct, either, as it would be a wrong one, so I think this method sounds pretty safe, despite how odd it is... I mean, it is verifying by "amount", you know?

// "&& gameStage === stagesOfTheGame[1].stageName" I think this here is important, too, as if you don't have it, it breaks. But anyway, it believe it works because outside of the [stageGame], both Arrays would have [0], so the Code would be executed just like that

// Next, we make an way to increase the Player Score below it, which will be part of what happens when the Code is executed

//      setPlayerScore((increasePlayerScore) => (increasePlayerScore += 100));

// If both Arrays match in the amount, then the Score get's 100+. Simple, right?

// Now, we put this: "startGame();" so it can add another word straigth away without problems
//      startGame();

// Lastly, we put the callBack up there or something and then we do the funny[Sorry, don't feel like explaining it]

//  }, [rightLetters, justLetters, startGame, gameStage]);

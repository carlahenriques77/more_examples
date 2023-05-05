



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

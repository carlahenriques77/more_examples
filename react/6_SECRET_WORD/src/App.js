// import / style
import "./App.css";

// import / hooks
import { useCallback, useEffect, useState } from "react"

// data(?)
import { wordsList } from "./data/words"
// Odd that he used the "{}" around it. Maybe I will find it out again why later?

// import / component
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

const stagesOfGif = [
  { sid: 1, sname: "sstart" },
  { sid: 2, sname: "sgame" },
  { sid: 3, sname: "sgameover" }
]

const guessesQuantity = 3
// Made so it can be Used and Changed easier. This way, we won't have to Change every single one of the "try numbers", instead, having to Change only here. 

function App() {
  const [gameStage, setGameStage] = useState(stagesOfGif[0].sname)
  const [wordsWords] = useState(wordsList)
  // console.log(wordsWords)
  // He deleted the Console.log line

  const [choosenWord, setChoosenWord] = useState("")
  const [choosenCategory, setChoosenCategore] = useState("")
  const [leLetters, setLetters] = useState([])

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guestGuesses, setGuesses] = useState(3)
  // In the useState is the "Tries Amount" 
  const [scoScore, setScore] = useState(0)

  const pickWordAndCategory = useCallback(() => {
    // pick a random cateGore
    const cacategories = Object.keys(wordsWords)
    const categore = 
    cacategories[
      Math.floor(Math.random() * Object.keys(cacategories).length)
      // The "Math.floor" is needed to get the "Right Number" or something(?)
    ]
    console.log(categore)

    // pick a random word
    const onlyWord = 
    wordsWords[categore]
    [Math.floor(Math.random() * wordsWords[categore].length)]
    
    console.log(onlyWord)

    return { onlyWord, categore }
    // Changed from "[]" to "{}" because of it not working right. He said that this way now is the Right one because is "desconstructuring"(?) it or something(?)
  }, [wordsWords])

  // process the letter input

  // Starts the Secret Word Game
  // Will need an "useCallback" because of the "useEffect" using the "startGame" below. It's needed to wrap it all on a "()"
  const startGame = useCallback(() => {
    // clear all letters, so it doesn't take a letter from a previous thing
    clearLetterStates()

    // pick word and category
    const { onlyWord, categore } = pickWordAndCategory()
    // It's needed to "Call" the Function here for it to Work
    // It was changed from "pickWordAndCategory()" to  "    const { onlyWord, categore } = pickWordAndCategory()"

    // create an array of leLetters
    let wordLetters = onlyWord.split("")
    // Looks like an List / Array of all the Letters of the Word

    wordLetters = wordLetters.map((wlLowerCase) => wlLowerCase.toLowerCase())
    // This Fix the problem "that would happen"(?) of needing to input an UpperCase Letter to Guess it Right, otherwise it would make you miss. Right now, all of the Letters are LowerCase.

    console.log(onlyWord, categore)
    console.log(wordLetters)

    // fill states
    setChoosenWord(onlyWord)
    setChoosenCategore(categore)
    setLetters(wordLetters)
    // An error Happened before because it was "setLetters(leLetters)", thus giving an "Empty Letter Array".

    setGameStage(stagesOfGif[1].sname)
    // Need to be put at the End. We don't want the Game to Start without the other things on this Section, right?
  }, [pickWordAndCategory])  // "This Function will start the Game when the Button is clicked(?)"
  // It was on the Wrong Spot, so I moved it here. Other's are probably wrong, too


  const verifyLetter = (candyLetter) => {
    // setGameStage(stagesOfGif[2].sname)
    // Deleted
    // console.log(candyLetter)
    // Deleted
    const normalizedLetter = candyLetter.toLowerCase()

    // check if letter has already been utilized
    if(
      guessedLetters.includes(normalizedLetter) || 
      wrongLetters.includes(normalizedLetter)
      ) {

      return;
      // return To prevent an Letter that has already been used, as it could cause them to lose their Chance Amount
    }

    // push guessed letter or remove a guess
    if(leLetters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        // ... Takes all of the Elements from the Array
        normalizedLetter,

        // If the Letter is Right
      ])
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,

        // If the Letter is Wrong
      ])

      setGuesses((actualActualGuesses) => actualActualGuesses - 1)
    }
  } // An Error happened when it was [3]... I wonder why? His explanation didn't Help soo much

  console.log(guessedLetters)
  console.log(wrongLetters)
  // He changed the position because he "was receiving the Log before it was being altereted"

  const clearLetterStates = () => {
    setGuessedLetters([])
    setWrongLetters([])
  }

  // check if guesses ended or not for the Game Cover
  useEffect(() => {

    if(guestGuesses <= 0) {
      // reset all states, which will Delete it all to Start a New Game from scratch
      clearLetterStates()

      setGameStage(stagesOfGif[2].sname)
    }
    // Made to know when "guestGuesses" get's to "0 or Less". It will do something, too. In this case, the Game will go to "Stage 2", when the 'Game is over'.

  }, [guestGuesses])
  // "useEffect" can Monitor "Data". A Function will be "Executed" whenever the Data is altered. The Data to monitor is put on the "[]". It might need to have more than one thing in there, as otherwisa it will do an error

  // check win condition
  useEffect(() => {
    // egg
    // e g-g
    // He was talking about the user needing to Input 2 of the same letter
    const uniqueLetters = [...new Set(leLetters)]
    // With this Array, they will get unique letters(?). The "set" only leave unique Items in the Array(?)

    // win codition
    if(guessedLetters.length === uniqueLetters.length) {
      // add score

      setScore((actualScore) => actualScore += 100)

      // restart game with new word
      startGame()
    }

    console.log(uniqueLetters)
    // Oh, in the Console.log, it was showing the Array without repeating a ingle word. "Javascript" would be: "Javscript"
  }, [guessedLetters, leLetters, startGame])
  // The "leLetters, startGame" inside the "[]" doesn't change anything(?), it was put to Fix an Error


  // Restarts the Game
  const retryReset = () => {
    setScore(0)
    setGuesses(guessesQuantity)

    setGameStage(stagesOfGif[0].sname)
  }

  return (
    <div className="App">
      {gameStage === 'sstart' && <StartScreen propStartGame={startGame} />}
      {gameStage === 'sgame' && (
        <Game 
          propVerifyLetter={verifyLetter} 
          propChoosenWord={choosenWord} 
          propChoosenCategory={choosenCategory} 
          propLetters={leLetters}
          propGuessedLetters={guessedLetters}
          propWrongLetters={wrongLetters}
          propGuestGuesses={guestGuesses}
          propScoScore={scoScore}
        />
      )}
      {/* His one Formatted it automatically, adding an "()" to Wrap it */}
      {gameStage === 'sgameover' && 
      <GameOver 
      propReset={retryReset} 
      propScoScore={scoScore}
      />}
      {/* He deleted the StartsScreen line. Apparently, it will appear "when the Game Starts" */}
    </div>
  );
}

export default App;

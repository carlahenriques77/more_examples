// import / style
import "./Game.css"

// import / hooks
import { useState, useRef } from "react"

const Game = ({ 
  propVerifyLetter, 
  // propChoosenWord,
  propChoosenCategory,
  propLetters,
  propGuessedLetters,
  propWrongLetters,
  propGuestGuesses,
  propScoScore,
}) => {

  const [coolLetter, setCoolLetter] = useState("")
  const letterInputRef = useRef(null)
  // Ayo, we put the "useRef(null)" with like this: "useRef[null]" accidentaly. Maybe we should Copy Paste their Code if an Error Happens, as it will be easier to tell the Mistake?

  const handleLetterSubmit = (hse) => {
    hse.preventDefault()

    propVerifyLetter(coolLetter)

    setCoolLetter("")

    letterInputRef.current.focus()
  }

  return (
    <div className="styleGame">
      {/* <h1>Game</h1>
      <button onClick={propVerifyLetter}>Porno Gay</button>
      Will Change the "Page" /Stage of the Game */}
      {/* He deleted it and gave the "div" an Class */}
      <p className="styleScore">
        <span>Score: {propScoScore}</span>
      </p>
      <h1>Guess the Word</h1>
      <h3 className="styleTip">
        Tip for the Word[Category]: <span>{propChoosenCategory}</span>
      </h3>
      <p>
        You still have {propGuestGuesses} Chance(s) to Guess.
      </p>
      <div className="wordContainer">
        {/* <span className="styleLetter">A</span>
        <span className="styleBlankSquare"></span> */}
        {/* He deleted it */}
        {propLetters.map((showLetter, keyI) => (
          propGuessedLetters.includes(showLetter) ? (
            <span key={keyI} className="styleLetter">
              {showLetter}
            </span>
          ) : (
            <span key={keyI} className="styleBlankSquare">

            </span>
          )
          // Will show the letter or not on the "Guessed Ones" part(??)
        ))}
      </div>
      <div className="letterContainer">
        <p>
          Try to Guess a Letter of the Word
        </p>
        <form onSubmit={handleLetterSubmit}>
          <input
           type="text" 
           name="nameLetter" 
           maxLength="1" 
           required 
           onChange={(ocLetter) => setCoolLetter(ocLetter.target.value)}
           value={coolLetter}
           ref={letterInputRef}
           />
          <button>Confirm!</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>
          Already used Letters:
        </p>
        {/* <span>a,</span>
        <span>b,</span>
        <span>c,</span> */}
        {/* Deleted */}
        {propWrongLetters.map((wrongLetter, wrongKeyI) => (
          <span key={wrongKeyI}>{wrongLetter}, </span>
        ))}
      </div>
    </div>
  )
}

export default Game
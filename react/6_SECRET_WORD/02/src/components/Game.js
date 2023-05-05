// import / hooks
import { useState, useRef } from "react";

// import / style
import "./Game.css"

const Game = ({ 
    propVerifyLetter, 
    propChoosenWord, 
    propOneRandomCategory, 
    propJustLetters, 
    propRightLetters, 
    propWrongLetters, 
    propGuessesTries, 
    propPlayerScore,
}) => {
  const [gameLetter, setGameLetter] = useState("")
  const letterInputRef = useRef(null)
  // No idea what it does yet...

  const handleSubmit = (stopReload) => {
    stopReload.preventDefault()

    propVerifyLetter(gameLetter)

    setGameLetter("")
    // Will remove the Letter from the Box when the Button is clicked
  
    letterInputRef.current.focus()
    // Looks like it works in a way to "focus" instantly when the Button is pressed. I didn't notice that... I pretty much though that it already happened for free
    // Anyway, it's pretty good, and make things easier for the Player, so I like it

  }

  // console.log zone if needed
  // console.log(propJustLetters)
  // console.log(propRightLetters)
  // console.log(51)
  // console.log(propVerifyLetter);
  // console.log(52)
  // console.log(gameLetter);
  // gameLetter is empty, soo far
  // console.log(53);
  // console.log(handleSubmit);
  // console.log(letterInputRef);

  return (
    <div className="styleGame">
        {/* <button onClick={propVerifyLetter}>Change Game Stage to the last one</button> */}
        {/* Weird, when I click this Button, it will give an Error saying that "xxx.toLowerCase is not a prop". Maybe it's because the "propVerifyLetter" now is about verifying the Letter and stuff, not just changing the Game Stage... Besides, now, the gameStage change's itself when the Chances get to 0, anyway */}

        <p>{propChoosenWord}</p>

        <p className="styleScore">
            <span>Score: {propPlayerScore}</span>
        </p>

        <h1>Guess the Word</h1>

        <h3 className="styleTip">
            Category of the Word: <span>{propOneRandomCategory}</span>
        </h3>

        <p>You still have {propGuessesTries} Chance(s) to Guess.</p>

        <div className="wordContainer">
        {propJustLetters.map((rightLetterSquare, uniqueShowKey) => (
          propRightLetters.includes(rightLetterSquare) ? (
            <span key={uniqueShowKey} className="styleLetter">
              {rightLetterSquare}
            </span>
          ) : (
            <span key={uniqueShowKey} className="styleBlankSquare">

            </span>
          )
        ))}
        {/* Odd, what did I mess up last time?? The Boxes weren't showing, but now they are... */}
        </div>

        <div className="letterContainer">
            <p>Try to Guess a Letter of the Word</p>
            <form onSubmit={handleSubmit}>
                <input
                  type='text'
                  name='letterInput'
                  maxLength={1}
                  required
                  onChange={(changeEventE) => setGameLetter(changeEventE.target.value)}
                  value={gameLetter}
                  // What does it do? I'm still not sure... Something tells me that because it's on the "form input" part, it will be what will send the Letters to the Game
                  ref={letterInputRef}
                  // ???
                  // Not soo sure, but maybe it's needed to be here so the "instant focus" can work?[Seems like it, as if you remove it, not only it won't work, but will also give you an big Error]
                />
                <button>Confirm!</button>
                {/* I presume it's reloading the Page because this is a Form Button without the Prevent Default, yes? */}
            </form>
        </div>

        <div className="wrongLettersContainer">
            <p>Wrong Letters:</p>
            {propWrongLetters.map((showWrongLetters, uniqueWrongKey) => (
              <span key={uniqueWrongKey}>{showWrongLetters}, </span>
            ))}
            
        </div>
        
    </div>
  )
}

export default Game

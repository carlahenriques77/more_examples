import "./StartScreen.css"
// Odd that he won't be using Modules. Though, I can understand it, somewhat. It's only a Single Page, after all

const StartScreen = ({ propStartGame }) => {
  return (
    <div className="styleStart">
        <h1>Secret Word</h1>
        <p>Click Below to Start Playing</p>
        <button onClick={propStartGame}>Start the Game</button>
        {/* When the Button is Clicked, it will "Change the Page" */}
    </div>
  )
}

export default StartScreen
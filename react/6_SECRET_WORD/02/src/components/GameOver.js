import React from 'react'

// import / style
import "./GameOver.css"

const GameOver = ({ propRestartGame, propPlayerScore }) => {
  return (
    <div>
    <h1>
      Game Cover
    </h1>
    <h2>
      Your Score: <span>{propPlayerScore}</span>
    </h2>
    <button onClick={propRestartGame}>
      Restart Game
    </button>
    {/* Will "Reset" the Game */}
  </div>
  )
}

export default GameOver
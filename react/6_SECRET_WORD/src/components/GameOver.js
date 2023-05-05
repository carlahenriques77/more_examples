// import / style
import "./GameOver.css"

const GameOver = ({ propReset, propScoScore }) => {
  return (
    <div>
      <h1>
        Game Cover
      </h1>
      <h2>
        Your Score: <span>{propScoScore}</span>
      </h2>
      <button onClick={propReset}>
        Adistar
      </button>
      {/* Will "Reset" the Game */}
    </div>
  )
}

export default GameOver
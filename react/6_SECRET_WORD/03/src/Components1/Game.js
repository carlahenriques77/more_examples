import './Game.css'

const Game = () => {

  return (
    <div className="game">
      <p className="point">
        <span>Pontuação: </span>
      </p>
      <h1>Adivinhe a palavra:</h1>
      <h3 className="tip">
        Dica sobre a palavra: <span></span>
      </h3>
      <p>Você ainda tem tentativa(s)</p>
      <div className="wordContainer">

      </div>
      <div className="letterContainer">
        <p>Tente adivinhar uma letra da palavra:</p>
        <form>
          <input
            type="text"
            name='letter'
            maxLength='1'
            required
            />
          <button>Jogar!</button>
        </form>
      </div>
      <div className="wrongLetterContainer">
        <p>Letras já utilizadas:</p>

      </div>
    </div >
  )
}

export default Game
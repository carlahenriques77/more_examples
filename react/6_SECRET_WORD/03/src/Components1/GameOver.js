// styles
import './GameOver.css';

const GameOver = () => {
  return (
    <div>
      <h1>Fim de jogo!</h1>
      <h2>A sua pontuação foi: <span></span></h2>
      <button>Resetar jogo</button>
    </div>
  );
};

export default GameOver;
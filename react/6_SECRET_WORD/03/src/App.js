// import / style
import "./App.css";

// import / components
import StartScreen from "./Components1/StartScreen";
import Game from "./Components1/Game";
import GameOver from "./Components1/GameOver";
// Dang, some weird problems already started to pop up...

// import / data
import { wordsList } from "./data/words";

// import / hooks
import { useState } from "react";

function App() {
  const stagesOfTheGame = [
    { id: 1, stageName: "firstStage" },
    { id: 2, stageName: "secondStage" },
    { id: 3, stageName: "thirdStage" },
  ];
  // Doesn't need an "()" here

  const [gameStage, setGameStage] = useState(stagesOfTheGame[0].stageName);

  const [dataWords] = useState(wordsList);

  const startGame = () => {
    setGameStage(stagesOfTheGame[1].stageName);
  };

  const pickWordAndCategory = () => {

    const justCategories = Object.keys(dataWords)
    
  }

  return (
    <div className="App">
      {gameStage === "firstStage" && 
      <StartScreen 
        propStartGame={startGame} 
      />}
      {gameStage === "secondStage" && <Game />}
      {gameStage === "thirdStage" && <GameOver />}
    </div>
  );
}

export default App;

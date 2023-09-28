import "./App.css";
import { useEffect, useState } from "react";
import Gameboard from "../Components/Gameboard";
import Resetbtn from "../Components/Resetbtn";
import Scoreboard from "../Components/Scoreboard";

function App() {
  const wincondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("scores")) == null)
      return
    setScore(JSON.parse(localStorage.getItem("scores")));
  }, []);
  const [boxValue, setBoxValue] = useState(Array(9).fill(null));
  const [isXplaying, setIsXplaying] = useState(true);
  const [score, setScore] = useState({ xscore: 0, oscore: 0 });
  const [isGameOver, setGameOver] = useState(false);
  const [whowin, setWinner] = useState(null);
  const handleClick = (index) => {
    if (boxValue[index] || isGameOver) {
      return;
    }
    const newBoard = boxValue.map((value, key) => {
      if (index === key) {
        return isXplaying ? "X" : "O";
      } else {
        return value;
      }
    });
    setBoxValue(newBoard);
    setIsXplaying(!isXplaying);
    const checkwinner = (board) => {
      for (let i = 0; i < wincondition.length; i++) {
        const [x, y, z] = wincondition[i];
        if (board[x] && board[x] == board[y] && board[y] == board[z]) {
          console.log(board[x] + " Won");
          setGameOver(true);
          return board[x];
        }
      }
    };
    let winner = checkwinner(newBoard);
    setWinner(winner);
    if (winner) {
      if (winner === "X") {
        setScore((prevstate) => {
          localStorage.setItem(
            "scores",
            JSON.stringify({ ...prevstate, xscore: prevstate.xscore + 1 })
          );
          return { ...prevstate, xscore: prevstate.xscore + 1 };
        });
      } else {
        setScore((prevstate) => {
          localStorage.setItem(
            "scores",
            JSON.stringify({ ...prevstate, oscore: prevstate.oscore + 1 })
          );
          return { ...prevstate, oscore: prevstate.oscore + 1 };
        });
      }
    }
  };
  const resetHandler = () => {
    setBoxValue(Array(9).fill(null));
    setGameOver(false);
  };

  return (
    <>
      <div className="container">
        {isGameOver && <h1 className="whowon">Game Over. {whowin} Wins</h1>}
        <Scoreboard
          xscore={score.xscore}
          oscore={score.oscore}
          isXplaying={isXplaying}
        />
        <Gameboard boxValue={boxValue} changeValue={handleClick} />
        <Resetbtn resetHandler={resetHandler} />
      </div>
    </>
  );
}

export default App;

"use client";

import { useState, useRef, useEffect } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";

function Board({pgn, counter, setCounter, analysis, setAnalysis}) {
  const game = useRef(new Chess());
  const [fen, setFen] = useState(game.current.fen());
  const [fullGame, setFullGame] = useState([]);
  const [pastMove, setPastMove] = useState();

  useEffect(() => {
    if(pgn == null)
      pgn = ""
      
    game.current.loadPgn(pgn);
    setFen(game.current.fen());
    setFullGame(game.current.history());
  }, []);

  function makeAMove(move) {
    const result = game.current.move(move);
    setFen(game.current.fen());
    return result;
  }


  function onDrop(sourceSquare, targetSquare) {
    const move = makeAMove({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q",
    });

    if (move === null) return false;
    return true;
  }

  function handleClick(num) 
  {
    if (num >= 0 && num <= fullGame.length) 
    {
      const chess = new Chess();
      for (let i = 0; i < num; i++) 
      {
        chess.move(fullGame[i]);
        if(i < num-1 === false)
          setPastMove(chess.fen())
        if(num === 1)
          setPastMove('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1')
      }
      const fen = chess.fen()
      console.log(fen);
      setFen(fen);
      setCounter(num); // update counter after the move
      getResonse(pastMove)
    }
    else if(counter === -1)
    {
      handleClick(fullGame.length-1)
    }
    
    
  }

  async function getResonse(fen)
  {
    console.log(fen)
    try{
      const response = await fetch("http://127.0.0.1:5000/", {
        method: "POST",
        body: JSON.stringify({
          fen: fen
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
        }).then((response) => response.json());
        let bestMove = response[0].move
        let bestSequence = response[1].sequence
        setAnalysis({bestMove, bestSequence})
        console.log(analysis)
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  return (
    <div className="w-full">
      <Chessboard position={fen} onPieceDrop={onDrop} />
      <div className="w-full flex justify-between align-center">
        <div>
          <button className="w-12 h-12" onClick={() => handleClick(0)}>&lt;&lt;</button>
          <button className="w-12 h-12" onClick={() => handleClick(counter-1)}>&lt;-</button>
        </div>
        <div>
          <button className="w-12 h-12" onClick={() => handleClick(counter+1)}>-&gt;</button>
          <button className="w-12 h-12" onClick={() => handleClick(fullGame.length)}>&gt;&gt;</button>
        </div>
      </div>
    </div>
  );
}

export default Board;

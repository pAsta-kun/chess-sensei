"use client";

import { useState, useRef, useEffect } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";

function Board({pgn, counter, setCounter}) {
  const game = useRef(new Chess());
  const [fen, setFen] = useState(game.current.fen());
  const [fullGame, setFullGame] = useState([]);

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
      }
      const fen = chess.fen()
      console.log(fen);
      setFen(fen);
      setCounter(num); // update counter after the move
    }
    else if(counter === -1)
    {
      handleClick(fullGame.length-1)
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

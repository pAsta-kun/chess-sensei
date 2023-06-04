"use client";

import { useState, useRef, useEffect } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";

function Board() {
  const game = useRef(new Chess());
  const [fen, setFen] = useState(game.current.fen());

  function makeAMove(move) {
    console.log(move);
    const result = game.current.move(move);
    setFen(game.current.fen());
    return result;
  }

  function makeRandomMove() {
    const possibleMoves = game.current.moves();
    if (game.current.game_over() || game.current.in_draw() || possibleMoves.length === 0) return;
    const randomIndex = Math.floor(Math.random() * possibleMoves.length);
    makeAMove(possibleMoves[randomIndex]);
  }

  function onDrop(sourceSquare, targetSquare) {
    const move = makeAMove({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q",
    });

    if (move === null) return false;
    setTimeout(makeRandomMove, 200);
    return true;
  }

  return (
    <div className="w-2/5 mx-6">
      <Chessboard position={fen} onPieceDrop={onDrop} />
    </div>
  );
}

export default Board;

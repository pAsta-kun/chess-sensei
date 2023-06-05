"use client";

import { useState, useRef, useEffect } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";

function Board() {
  const game = useRef(new Chess());
  const [fen, setFen] = useState(game.current.fen());
  const [counter, setCounter] = useState(-1);
  const [fullGame, setFullGame] = useState([]);
  console.log(counter)


  useEffect(() => {
    const pgn = `
      1. d4 d5 2. Nf3 Nc6 3. Bf4 Nf6 4. e3 Bg4 5. Be2 e6 6. Nc3 Bb4 7. Qd2 O-O 8. a3
      Ba5 9. b4 Bb6 10. Nb5 a6 11. Nc3 a5 12. b5 Ne7 13. a4 Nf5 14. Bd3 Bxf3 15. gxf3
      Nh4 16. Bg5 Nxf3+ 17. Ke2 Nxd2 18. Kxd2 h6 19. Bf4 Ng4 20. Ke2 Qh4 21. Bg3 Qf6
      22. f3 Nxe3 23. Kxe3 Qg5+ 24. Bf4 Qf6 25. Be5 Qxe5+ 26. Kf2 Bxd4+ 0-1
    `;
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
      setFen(fen);
      setCounter(num); // update counter after the move
    }
    else if(counter === -1)
    {
      handleClick(fullGame.length-1)
    }
    
    
  }

  return (
    <div className="w-2/5 mx-6">
      <Chessboard position={fen} onPieceDrop={onDrop} />
      <div className="w-full flex justify-between align-center">
        <button className="w-12 h-12" onClick={() => handleClick(counter-1)}>&lt;-</button>
        <button className="w-12 h-12" onClick={() => handleClick(counter+1)}>-&gt;</button>
      </div>
    </div>
  );
}

export default Board;

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
    1. e4 e5 2. Bc4 Nf6 3. Nc3 Nc6 4. Nf3 Bb4 5. Nd5 Nxe4 6. c3 Bc5 7. O-O O-O 8. d4
    exd4 9. cxd4 Nxd4 10. Nxd4 c6 11. Ne3 Qf6 12. Ng4 Qxd4 13. Qxd4 Bxd4 14. Bf4 d5
    15. Be2 Bxg4 16. Bxg4 g5 17. Be3 Bxe3 18. fxe3 Rae8 19. Bd7 Re7 20. Bf5 Nd2 21.
    Rf2 Nc4 22. a4 Nxe3 23. Bh3 Nc4 24. b4 f5 25. Bxf5 Ne3 26. Re1 Rxf5 27. Rxf5
    Nxf5 28. Rxe7 Nxe7 29. Kf2 Nf5 30. g4 Nd4 31. Ke3 Nc2+ 32. Kd3 Nxb4+ 33. Kd4 Kf7
    34. a5 Kf6 35. Kc5 Nd3+ 36. Kd6 d4 37. Kc7 Nc5 38. a6 bxa6 39. Kxc6 Nb3 40. Kb7
    d3 41. Kxa7 d2 42. Kxa6 d1=Q 43. Kb5 Qxg4 44. h3 Qxh3 45. Kb4 g4 46. Kc4 g3 47.
    Kxb3 g2+ 48. Kc2 g1=Q 49. Kd2 Qgg2+ 50. Ke1 Qhh1# 0-1
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

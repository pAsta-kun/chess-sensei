// export default Board
"use client";
import { Chessboard } from "react-chessboard";

function Board() {
  return (
    <div className="w-96 h-96">
      <Chessboard id="BasicBoard" />
    </div>
  );
}

export default Board
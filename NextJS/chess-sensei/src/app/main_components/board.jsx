// export default Board
"use client";
import { Chessboard } from "react-chessboard";

function Board() {
  return (
    <div className="w-2/5 mx-6">
      <Chessboard id="BasicBoard" />
    </div>
  );
}

export default Board
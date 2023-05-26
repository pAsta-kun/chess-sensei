// import React, { useState, useEffect } from 'react';
// import { useClient } from 'react';
// import Chessboard from 'chessboardjsx';
// import Chess from 'chess.js';

// function ChessGame() {
//     useClient();
    
//     const [fen, setFen] = useState('start');
//     const [game, setGame] = useState(new Chess());

//     const onDrop = ({ sourceSquare, targetSquare }) => {
//         // see if the move is legal
//         let move = game.move({
//         from: sourceSquare,
//         to: targetSquare,
//         promotion: 'q' // always promote to a queen for example simplicity
//         });

//         // illegal move
//         if (move === null) return;

//         setFen(game.fen());
//     };

//     useEffect(() => {
//         setFen(game.fen());
//     }, [game]);

//     return (
//         <Chessboard
//         width={400}
//         id="myChessGame"
//         position={fen}
//         onDrop={onDrop}
//         orientation="white"
//         />
//     );
// }

// export default ChessGame;

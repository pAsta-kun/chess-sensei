"use client";

import InputBar from "./input"
import Toggle from "./toggleSwitch"
import MoveSeqeucne from "./moveSequence" 
import { useState, useEffect } from 'react';
import { Chess } from "chess.js";

function Chatbox({pgn, i, counter, analysis})
{
    const [display, setDisplay] = useState(true);
    const [messages, setMessages] = useState([]);
    const [fullGame, setFullGame] = useState([]);

    useEffect(() => {
        if(pgn[i].pgn != undefined)
        {
            const chess = new Chess();
            chess.loadPgn((pgn[i].pgn));
            setFullGame(chess.history())
        }
    }, [pgn[i].pgn]);



    const handleMessage = (msg, isAi) => {
        setMessages(prevState => [...prevState, {message: msg, isAi: isAi}]);
        
        handleResponse(msg);
    };

    const handleResponse = (msg) => {
        //let response = await getAIResponse(msg);
        setMessages(prevState => [...prevState, {message: response, isAi: true}]);
    }

    return (
        <div className="p-3 rounded-3xl border-accent border-4 flex flex-col items-center justify-between bg-accent bg-opacity-10 w-3/12 h-4/5 overflow-hidden">
            <Toggle onClick={setDisplay}/>
            <div className="h-full w-full flex justify-start items-center flex-col">
            {fullGame.map((test, index) => {
                if (index % 2 === 0) { // only process every other move
                    let whiteMove = test;
                    let blackMove = fullGame[index + 1]; // use next move for black
                    let arrayIndex = Math.floor(index / 2);
                    return (
                        <MoveSeqeucne 
                            display={display} 
                            whiteMove={whiteMove} 
                            blackMove={blackMove} 
                            key={index} 
                            i={arrayIndex}
                            counter={(counter/2)-1}
                            analysis={analysis}
                            />
                    );
                    }
                    return null; // return null for odd index, so nothing is rendered for it
                })}

            </div>

            <InputBar onMessage={handleMessage} display={display}/>
        </div>
    )
}

export default Chatbox
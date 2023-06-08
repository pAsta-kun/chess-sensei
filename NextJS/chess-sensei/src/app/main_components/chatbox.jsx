"use client";

import InputBar from "./input"
import Toggle from "./toggleSwitch"
import MoveSeqeucne from "./moveSequence" 
import { useState, useEffect } from 'react';
import { Chess } from "chess.js";

function Chatbox({pgn, i})
{
    const [display, setDisplay] = useState(true);
    const [messages, setMessages] = useState([]);
    const [fullGame, setFullGame] = useState([]);
    const [arrayIndex, setArrayIndex] = useState(-2)

    useEffect(() => {
        if(pgn[i].pgn != undefined)
        {
            const chess = new Chess();
            chess.loadPgn((pgn[i].pgn));
            setFullGame(chess.history())
        }
    }, [pgn[i].pgn]);

    console.log(fullGame);


    const handleMessage = (msg, isAi) => {
        setMessages(prevState => [...prevState, {message: msg, isAi: isAi}]);
        
        handleResponse(msg);
    };

    const handleResponse = (msg) => {
        //let response = await getAIResponse(msg);
        console.log(msg)
        console.log(response)
        setMessages(prevState => [...prevState, {message: response, isAi: true}]);
    }

    return (
        <div className="p-3 rounded-3xl border-accent border-4 flex flex-col items-center justify-between bg-accent bg-opacity-10 w-3/12 h-4/5 overflow-hidden">
            <Toggle onClick={setDisplay}/>
            <div className="h-full w-full flex justify-start items-center flex-col">
                <MoveSeqeucne display={display} messages={arrayIndex} i={arrayIndex}/>
                <MoveSeqeucne display={display} messages={arrayIndex+1} i={arrayIndex+1}/>
            </div>

            <InputBar onMessage={handleMessage} display={display}/>
        </div>
    )
}

export default Chatbox
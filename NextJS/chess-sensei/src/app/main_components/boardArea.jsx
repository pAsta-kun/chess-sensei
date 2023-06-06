"use client";

import Board from "./board"
import InputBar from "./input"
import { useState } from 'react';

function DisplayBoard() 
{
    const [messages, setMessages] = useState([{message: "", display: true}]);
    const [i, setI] = useState(0);
    const handleMessage = (pgn, display) => {

        setMessages(prevState => [...prevState, {pgn: pgn, display: display}]);
        setI(i + 1);
    };
    
    if(messages[i].display)
    {
        console.log(messages[i].pgn)
        return(
            <div className="w-2/5 mx-6 flex">
                <Board/>
                <div className="w-2/5 h-4/5 bg-background bg-opacity-70 rounded-2xl border-secondary border-4 flex justify-center items-center absolute z-10 p-5">
                    <InputBar display={true} onMessage={handleMessage}/>
                </div>
            </div>

        ) 
    }

    else 
    {
        return(
            <div className="w-2/5  mx-6">
                <Board key={i} pgn={messages[i].pgn}/>
            </div>
            )
    }

}

export default DisplayBoard
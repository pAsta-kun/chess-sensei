"use client";

import InputBar from "./input"
import Toggle from "./toggleSwitch"
import { useState } from 'react';

function Chatbox()
{
    const [display, setDisplay] = useState(true);
    const [messages, setMessages] = useState([]);

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
            <InputBar onMessage={handleMessage} display={display}/>
        </div>
    )
}

export default Chatbox
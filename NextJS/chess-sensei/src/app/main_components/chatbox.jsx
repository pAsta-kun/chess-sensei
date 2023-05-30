"use client";``

import InputBar from "./input"
import Toggle from "./toggleSwitch"
import { useState } from 'react';

function Chatbox()
{
    const [display, setDisplay] = useState(true);

    return (
        <div className="p-3 rounded-3xl border-accent border-4 flex flex-col items-center justify-between bg-accent bg-opacity-10 w-3/12 h-4/5 overflow-hidden">
            <Toggle onClick={setDisplay}/>
            <InputBar display={display}/>
        </div>
    )
}

export default Chatbox
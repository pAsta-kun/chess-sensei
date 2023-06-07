"use client";

import Board from "./board"
import InputBar from "./input"
import { useState } from 'react';

function DisplayBoard({ messages, i, onMessage }) 
{
   
    if(messages[i].display)
    {
        console.log(messages[i].pgn)
        return(
            <div className="w-2/5 mx-6 flex">
                <Board/>
                <div className="w-2/5 h-4/5 bg-background bg-opacity-70 rounded-2xl border-secondary border-4 flex justify-center items-center absolute z-10 p-5">
                    <InputBar display={true} onMessage={onMessage}/>
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
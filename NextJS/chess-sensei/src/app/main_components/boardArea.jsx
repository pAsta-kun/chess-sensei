"use client";

import Board from "./board"
import InputBar from "./input"
import { useState } from 'react';

function DisplayBoard({ messages, i, onMessage, counter, setCounter, analysis, setAnalysis }) 
{
   
    if(messages[i].display)
    {
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
                <Board key={i} pgn={messages[i].pgn} counter={counter} setCounter={setCounter} analysis={analysis} setAnalysis={setAnalysis}/>
            </div>
            )
    }

}

export default DisplayBoard;
"use client";

import Navbar from "./main_components/navbar"
import Chatbox from "./main_components/chatbox"
import Board from "./main_components/board"
import DisplayBoard from "./main_components/boardArea"
import { useState } from 'react';

export default function Home() {

  const [messages, setMessages] = useState([{message: "", display: true}]);
  const [i, setI] = useState(0);
  const [currentMoveCounter, setCurrentMoveCounter] = useState(-1);
  const [analysis, setAnalysis] = useState();
  const handleMessage = (pgn, display) => {
      setMessages(prevState => [...prevState, {pgn: pgn, display: display}]);
      setI(i + 1);
  };
  return (
    <div className="h-full">
      <Navbar/>
      <div  className="flex justify-center h-full">
        <DisplayBoard messages={messages} i={i} onMessage={handleMessage} counter={currentMoveCounter} setCounter={setCurrentMoveCounter} analysis={analysis} setAnalysis={setAnalysis}/>
        <Chatbox pgn={messages} i={i} counter={currentMoveCounter} analysis={analysis}/>
      </div>
    </div>
  )
}

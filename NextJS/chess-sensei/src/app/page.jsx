import Navbar from "./main_components/navbar"
import Chatbox from "./main_components/chatbox"
import Board from "./main_components/board"
import DisplayBoard from "./main_components/boardArea"

export default function Home() {
  return (
    <div className="h-full">
      <Navbar/>
      <div  className="flex justify-center h-full">
        <DisplayBoard/>
        <Chatbox/>
      </div>
    </div>
  )
}

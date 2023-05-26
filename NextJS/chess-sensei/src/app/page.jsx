import Navbar from "./main_components/navbar"
import Chatbox from "./main_components/chatbox"
import Chessgame from "./main_components/chessboard"

export default function Home() {
  return (
    <div className="h-full">
      <Navbar/>
      <div  className="flex justify-center h-full">
        <Chatbox/>
      </div>
    </div>
  )
}

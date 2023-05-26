import InputBar from "./input"

function Chatbox()
{
    return (
        <div className="p-3 rounded-3xl border-accent border-4 flex flex-col items-center justify-end bg-accent bg-opacity-10 w-96 h-4/5 overflow-hidden">
            <InputBar/>
        </div>
    )
}

export default Chatbox
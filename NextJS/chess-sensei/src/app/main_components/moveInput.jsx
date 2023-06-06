import InputBar from "./input"

function Overlay({display})
{
    const [messages, setMessages] = useState([]);

    const handleMessage = (msg, display) => {
        setMessages(prevState => [...prevState, {message: msg, display: display}]);;
    };
    
    if(display)
        return (
            <div className="w-2/5 h-full bg-accent bg-opacity-10 rounded-2xl border-accent border-4 flex justify-center items-center absolute z-10 p-5">
                <InputBar display={true} onMessage={handleMessage}/>
            </div>
        )

    else return <></>

}

export default Overlay
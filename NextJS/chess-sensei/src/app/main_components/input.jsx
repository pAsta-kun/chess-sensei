"use client";

function InputBar ({onMessage, display}) 
{
    const handleKeyPress = (event) =>
    {            
        if(event.key === 'Enter')
            event.preventDefault();
        if (event.key === 'Enter' || event.key === undefined) {
            const msg = document.getElementById('textInput').value;
            document.getElementById('textInput').value = '';
            onMessage(msg, false);
        }
    }
   
    if(display)
    {
        return (
            <div className="p-2 rounded-2xl border-accent border-4 flex justify-center items-center bg-accent bg-opacity-10 w-full h-14">
                <textarea id="textInput" class="bg-zero outline-none text-md w-full resize-none" rows="1" onKeyDown={handleKeyPress}></textarea>
                    <button className="w-8 text-accent">-&gt;</button>
            </div>
        )
    }
    else {
            return (
                <>
                </>
            )
    }


}

export default InputBar
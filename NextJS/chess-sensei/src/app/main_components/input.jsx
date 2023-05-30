function InputBar ({display}) 
{
    if(display)
    {
            return (
                <div className="p-2 rounded-2xl border-accent border-4 flex justify-center items-center bg-accent bg-opacity-10 w-full h-14">
                    <textarea id="input-textarea" class="bg-zero outline-none text-md w-full resize-none" rows="1"></textarea>
                        <button className="w-8 text-accent">-&gt;</button>
                </div>
            )
    }
    else {
            return (
                <></>
            )
    }


}

export default InputBar


function MoveSeqeucne({whiteMove, blackMove, i, display, counter})
{
    let highlight = (counter === i && i % 2 == 0) || (counter === i && i % 2 != 0) ? 'bg-accent' : '';
    console.log(counter + " iadjoadhz")
    if(!display)
    {
         if(i % 2 == 0)
        {
            return ( 
                <div className="flex justify-evenly items-center w-full h-6 bg-background bg-opacity-100 m-1">
                    <h2 className="mx-2">{i+1}</h2>
                    <div className={`flex justify-evenly items-center w-full h-4 `}>
                        <h2 className={`m-2 ${highlight}`}>{whiteMove}</h2>
                        <h2 className={`m-2 ${highlight}`}>{blackMove}</h2>
                    </div>
                </div>
            )
        }
        else return ( 
            <div className="flex justify-evenly items-center w-full h-4 bg-background bg-opacity-0 m-1">
                <h2 className="mx-2">{i+1}</h2>
                    <div className="flex justify-evenly items-center w-full h-4">
                        <h2 className={`m-2 ${highlight}`}>{whiteMove}</h2>
                        <h2 className={`m-2 ${highlight}`}>{blackMove}</h2>
                    </div>
            </div>
        )
    }
    else return(
        <></>
    )
   
}

export default MoveSeqeucne


function MoveSeqeucne({whiteMove, blackMove, i, display, counter})
{
    let highlight = (counter === i && counter % 2 === 0 && counter > 0) ? '' : '';
    let highlightWhite = (counter % 1 !== 0 && counter == i-.5) ? 'bg-accent bg-opacity-30 border-2 border-accent rounded-md border-opacity-0' : '';
    let highlightBlack = (counter % 1 === 0 && counter === i) ? 'bg-accent bg-opacity-30 border-2 border-accent rounded-md border-opacity-0' : '';


    console.log(counter + " iadjoadhz")
    if(!display)
    {
         if(i % 2 == 0)
        {
            return ( 
                <div className="flex justify-evenly items-center w-full h-7 bg-background bg-opacity-100 py-1">
                    <h2 className="mx-2">{i+1}</h2>
                    <div className={`flex justify-evenly items-center w-full h-4 ${highlight}`}>
                        <h2 className={`m-2 ${highlightWhite}`}>{whiteMove}</h2>
                        <h2 className={`m-2 ${highlightBlack}`}>{blackMove}</h2>
                    </div>
                </div>
            )
        }
        else return ( 
            <div className="flex justify-evenly items-center w-full h-6 bg-background bg-opacity-0 m-1">
                <h2 className="mx-2">{i+1}</h2>
                    <div className={`flex justify-evenly items-center w-full h-4 ${highlight}`}>
                        <h2 className={`m-2 ${highlightWhite}`}>{whiteMove}</h2>
                        <h2 className={`m-2 ${highlightBlack}`}>{blackMove}</h2>
                    </div>
            </div>
        )
    }
    else return(
        <></>
    )
   
}

export default MoveSeqeucne
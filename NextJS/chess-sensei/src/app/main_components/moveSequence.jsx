

function MoveSeqeucne({messages, i, display})
{
    if(!display)
    {
         if(i % 2 == 0)
        {
            return ( 
                <div className="flex justify-evenly items-center w-full h-4 bg-background bg-opacity-100 m-1">
                    <h2 className="m-2">{messages}</h2>
                    <h2 className="m-2">{messages}</h2>
                </div>
            )
        }
        else return ( 
            <div className="flex justify-evenly items-center w-full h-4 bg-background bg-opacity-0 m-1">
                <h2 className="m-2">{messages}</h2>
                <h2 className="m-2">{messages}</h2>
            </div>
        )
    }
    else return(
        <></>
    )
   
}

export default MoveSeqeucne
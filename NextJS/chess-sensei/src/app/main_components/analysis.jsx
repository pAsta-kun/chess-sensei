function analysisDisplay({display, bestMove, bestSequence})
{
    if(display)
        return (
            <div className="flex flex-col justify-between align-center w-full h-40">
                <div className="flex flex-col justify-center item-center w-full h-4/5">
                    <h2 className="flex justify-center item-center">Best Move: {bestMove}</h2>
                    <h2 className="flex justify-center item-center">Best Move Sequence: {bestSequence}</h2>
                </div>
                <button className="w-full bg-accent text-background rounded-lg">Analyze</button>
            </div>
        )
    else return (
        <></>
    )
}

export default analysisDisplay
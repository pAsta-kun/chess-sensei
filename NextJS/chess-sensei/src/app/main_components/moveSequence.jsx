import { BaseNextResponse } from "next/dist/server/base-http";
import AnalysisDisplay from "./analysis";

function MoveSeqeucne({whiteMove, blackMove, i, display, counter, analysis})
{
    let displayAnalysis = (counter % 1 !== 0 && counter == i-.5) || (counter % 1 === 0 && counter === i) ? true : false;
    let highlightWhite = (counter % 1 !== 0 && counter == i-.5) ? 'bg-accent bg-opacity-30 border-2 border-accent rounded-md border-opacity-0' : '';
    let highlightBlack = (counter % 1 === 0 && counter === i) ? 'bg-accent bg-opacity-30 border-2 border-accent rounded-md border-opacity-0' : '';
    let bestSequenceMoves;
    let bestMove;
    if(analysis !== undefined)
    {
        bestSequenceMoves = analysis.bestSequence.map(move => move.Move).join(', ');
        bestMove = analysis.bestMove;
    }
        
    else 
    {
        bestSequenceMoves = "Error"
        bestMove = "Error"
    }
    console.log(bestSequenceMoves)

    if(!display)
    {
         if(i % 2 == 0)
        {
            return ( 
                <div className="flex flex-col justify-center items-center bg-background w-full">
                    <div className="flex justify-evenly items-center w-full h-7 bg-background bg-opacity-100 py-1">
                        <h2 className="mx-2">{i+1}</h2>
                        <div className="flex justify-evenly items-center w-full h-4">
                            <h2 className={`m-2 ${highlightWhite}`}>{whiteMove}</h2>
                            <h2 className={`m-2 ${highlightBlack}`}>{blackMove}</h2>
                            
                        </div>
                    </div>
                    <AnalysisDisplay display={displayAnalysis} bestMove={bestMove} bestSequence={bestSequenceMoves}/>
                </div>

            )
        }
        else return ( 
            <div className="flex flex-col justify-center items-center bg-background bg-opacity-0 w-full">
                <div className="flex justify-evenly items-center w-full h-7 bg-background bg-opacity-0 py-1">
                    <h2 className="mx-2">{i+1}</h2>
                    <div className="flex justify-evenly items-center w-full h-4">
                        <h2 className={`m-2 ${highlightWhite}`}>{whiteMove}</h2>
                        <h2 className={`m-2 ${highlightBlack}`}>{blackMove}</h2>
                        
                    </div>
                </div>
                <AnalysisDisplay display={displayAnalysis} bestMove={bestMove} bestSequence={bestSequenceMoves}/>
            </div>
        )
    }
    else return(
        <></>
    )
   
}

export default MoveSeqeucne
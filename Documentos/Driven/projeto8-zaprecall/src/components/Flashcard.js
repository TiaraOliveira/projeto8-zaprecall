import react from "react"
import Questao from "./Questao"
import Resposta from "./Resposta"

export default function Flashcard(){
    const [virada, setVirada] = react.useState("up")
    return(
        <div  onClick={()=> setVirada("down")}> 
            {virada === 'up' ? <Questao setVirada={setVirada} />: <Resposta />}
        </div>
    )
}
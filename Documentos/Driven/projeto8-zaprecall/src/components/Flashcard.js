import react from "react"
import Questao from "./Questao"
import Resposta from "./Resposta"

export default function Flashcard(){
    const [text, setText] = react.useState("up")
    return(
       <Questao text={<Questao/>} Onclick={()=> setext(<Resposta/>)}/>
    )
}
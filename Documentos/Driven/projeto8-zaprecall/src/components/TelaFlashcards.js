import React from "react"
import Questao from "./Questao"
import Resposta from "./Resposta"

export default function TelaFlashcards(){
    
    const [text, setText] = React.useState(<Questao />);
    return(
        
        <>
            <div className="Corpo">
                <header className="TelaFlash">
                    <img src="assets/images/logo.png" alt="" />
                    <h1>ZapRecall</h1>
                </header>
                <div  className="pergunta" onClick={()=> setText(<Resposta/>)}>
                   {text}
                </div> 
            <footer></footer>
            </div>
        </>
    )
}
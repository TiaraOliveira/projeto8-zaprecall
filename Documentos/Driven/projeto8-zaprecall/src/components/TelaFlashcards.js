import React from "react"
import Questao from "./Questao"

function comparador() {
    return Math.random() - 0.5;
    }
    const questoes = [
    { questao: " O que é JSX?", answer: "Uma extensão de linguagem do JavaScript"},
    { questao: "O React é __", answer: "uma biblioteca JavaScript para construção de interfaces"},
    { questao: "Componentes devem iniciar com __", answer: "letra maiúscula"},
    { questao: "Podemos colocar __ dentro do JSX", answer:"expressões"},
    
    ]
    
    questoes.sort(comparador);
    const tamanho = questoes.length

export default function TelaFlashcards(){
    const[contador, setcontador]=React.useState(0)
    const[frase, setFrase]=React.useState("")
    const[Icone, setIcone]=React.useState("")

    return(
        
        <>
            <div className="Corpo">
                <header className="TelaFlash">
                    <img src="assets/images/logo.png" alt="" />
                    <h1>ZapRecall</h1>
                </header>
                <div className="questionario">
                {questoes.map((questoes, index) => <Questao index={index + 1} questao={questoes.questao}  answers={questoes.answer} 
                                                                contador = {contador} setcontador={setcontador} 
                                                                tamanho={tamanho}  setFrase={setFrase}  
                                                                setIcone={setIcone}         Icone={Icone}                                 
                                                                />)}
              </div>
              <div className="base">
               <h4>{frase}</h4>
               <div>{contador}/{questoes.length} Concluídos</div>
              <div className="baseicons">{Icone}</div>
              
               </div>
            </div>
        </>
    )
}
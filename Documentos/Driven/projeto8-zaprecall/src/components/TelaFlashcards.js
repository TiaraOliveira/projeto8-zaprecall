import React from "react"
import Questao from "./Questao"
import Footer from "./Footer";

function comparador() {
    return Math.random() - 0.5;
    }
    const questoes = [
    { questao: " O que é JSX?", answer: "Uma extensão de linguagem do JavaScript"},
    { questao: "O React é __", answer: "uma biblioteca JavaScript para construção de interfaces"},
    { questao: "Componentes devem iniciar com __", answer: "letra maiúscula"},
    { questao: "Podemos colocar __ dentro do JSX", answer:"expressões"},
    { questao: "O ReactDOM nos ajuda __", answer:"interagindo com a DOM para colocar componentes React na mesma"},
    { questao: "Usamos o npm para __", answer:"gerenciar os pacotes necessários e suas dependências"},
    { questao: "Usamos props para __", answer:"passar diferentes informações para componentes "},
    { questao: "Usamos estado (state) para __", answer:"dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}
    
    ]
    
    questoes.sort(comparador);
    const tamanho = questoes.length

export default function TelaFlashcards({setTela}){
    const[contador, setcontador]=React.useState(0)
    
    const[Icone, setIcone]=React.useState("")
    const[Incorreta, setIncorreta]=React.useState(0)

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
                                                                tamanho={tamanho}  
                                                                setIcone={setIcone}         Icone={Icone}    
                                                                setIncorreta={setIncorreta}  Incorreta={Incorreta}                           
                                                                />)}
              </div>
              <div className="base">
               <Footer contador = {contador} tamanho={tamanho} Icone={Icone}  Incorreta={Incorreta}  setTela={setTela} />
              
               </div>
            </div>
        </>
    )
}
import react from "react";
function Question({props,setVirada}){
    return(
     <div  onClick={()=> setVirada("down")}>
        <h4>{props.questao}</h4>
        <img src="assets/images/setinha.png" alt="" />
    </div>
    )
  }

function Resposta(props ){
    return(
        <div className="Resposta">
                <h4> {props.answer}</h4>
        </div>
    )
}

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
  const distribuidas =  questoes.sort(comparador);
  
    const questoesComponents = distribuidas.map(item =><Question questao={item.questao} setVirada={setVirada}/>)
    const RespostasComponents = distribuidas.map(item =><Resposta answer={item.answer} />)
   

export default function Questao(){
  const [virada, setVirada] = react.useState("up")
    return(
      <>
      {virada === 'up' ? {questoesComponents} : {RespostasComponents}}
      </>
    )
}
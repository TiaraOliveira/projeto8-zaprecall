function Question(props){
    return(
        <div  className="pergunta">
        <h4>{props.questao}</h4>
        <img src="assets/images/setinha.png" alt="" />
    </div>
    )
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
 
  
    const questoesComponents = questoes.map(item =><Question questao={item.questao} />)
export default function Questao(){
    return(
        <>
        {questoesComponents}
        </>
    )
}
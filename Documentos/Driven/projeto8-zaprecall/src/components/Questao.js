import React from "react"

export default function Question({index, questao, answers, contador, setcontador, tamanho, setFrase, setIcone, Icone}){
  const[virada, setVirada]=React.useState("carta")
  
  function RespostaCerta(){
    setcontador(contador+1)
    setVirada("certa")
    const newIcone = [...Icone,  <div  className="certa" > <ion-icon name="checkmark-circle"></ion-icon>  </div>]
    setIcone(newIcone)
  }
function RespostaQuase(){
  setcontador(contador+1)
  setVirada("quase")
  const newIcone = [...Icone,  <div  className="quase" > <ion-icon name="help-circle"></ion-icon></div>]
  setIcone(newIcone)
}
function RespostaErrada(){
  setcontador(contador+1)
  setVirada("errada")
  const newIcone = [...Icone, <div  className="errada" >  <ion-icon name="close-circle"></ion-icon></div>]
  setIcone(newIcone)
}
    if(virada === "carta"){
      return(
      <>
      <div  className="carta" onClick={()=> setVirada("questão")}>
        <h4>Pergunta {index}</h4>
        <ion-icon name="play-outline"></ion-icon>
      </div>
     </>
    
    
  )} if (virada === "questão"){
    return(
      <>
      <div  className="pergunta" onClick={()=> setVirada("resposta")}>
        <h4>{questao}</h4>
        <img src="assets/images/setinha.png" alt=""  />
      </div>
     </>
    )}
    if (virada === "resposta"){
      return(
            <div  className="pergunta" >
               <h4> {answers}</h4>
               <div className="escolhas">
                <div className="choise" >
                  <div className="red" onClick= {RespostaErrada}>Não lembrei</div>
                </div>
                <div className="choise">
                 <div className="yellow" onClick={RespostaQuase}>Quase lembrei</div>
                </div>
                <div className="choise">
                  <div className="green" onClick={RespostaCerta}>Zap!!!</div>
                </div>
                </div>
              </div>
       )}
      if(virada === "errada"){
        return(
        <>
          <div  className="respondida errada" >
          <h4>Pergunta {index}</h4>
          <ion-icon name="close-circle"></ion-icon>
        </div>
       </>
      
      
    )}
    if(virada === "quase"){
      return(
      <>
        <div  className="respondida quase" >
        <h4>Pergunta {index}</h4>
        <ion-icon name="help-circle"></ion-icon>
      </div>
     </>
    
    
  )}
    
  if(virada === "certa"){
    return(
    <>
      <div  className="respondida certa" >
      <h4>Pergunta {index}</h4>
      <ion-icon name="checkmark-circle"></ion-icon>
    </div>
   </>
  
  
)}
  
}
     
   
  

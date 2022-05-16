
export default function Footer({contador, tamanho, Icone,  Incorreta, setTela}){

    if (contador === tamanho && Incorreta !== 0 ){
        return(

        <>
        <div className="fimjogo">
        <img src="assets/images/sad.png" alt="" />
        <h4>Putz...</h4>
       </div>
            <h3>Ainda faltam alguns... </h3>
          <h3>Mas não desanime!</h3>
         <div>{contador}/{tamanho} Concluídos</div>
        <div className="baseicons">{Icone}</div>
        <button onClick={()=> setTela("telaInicial")}>Reiniciar</button>
       </>
        )
      
       
    } if (contador === tamanho && Incorreta === 0 ){

        return(

            <>
            <div className="fimjogo">
            <img src="assets/images/party.png" alt="" />
            <h4>Parabéns</h4>
            
            </div>
           
         <h3>Você não esqueceu de nenhum flashcard!</h3>
             
             <div>{contador}/{tamanho} Concluídos</div>
                <div className="baseicons">{Icone}</div>
                <button onClick={()=> setTela("telaInicial")}>Reiniciar</button>
           </>
        )
    } else{
        return(

            <>
                <div>{contador}/{tamanho} Concluídos</div>
                <div className="baseicons">{Icone}</div>
           </>
        )
    }
}
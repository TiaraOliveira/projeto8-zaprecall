export default function Init({setTela}){
    return(
        <div className="telaInicial">
            <img src="assets/images/logo.png" alt="" />
            <h1>Zap Recall</h1>
            <button on onClick={()=> setTela("telaflashcards")}>Iniciar Recall</button>
        </div>
        
    )
}
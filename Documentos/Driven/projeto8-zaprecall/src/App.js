import Init from "./components/Init"
import react from "react"
import TelaFlashcards from "./components/TelaFlashcards"

export default function App(){
    const [tela, setTela] = react.useState("telaInicial")

   


    return(
        <div>
            {tela === 'do' ? <Init setTela={setTela} />: <TelaFlashcards />}
        </div>
    )

}
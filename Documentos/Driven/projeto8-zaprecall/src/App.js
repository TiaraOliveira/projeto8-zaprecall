import Init from "./components/Init"
import react from "react"
import TelaFlashcards from "./components/TelaFlashcards"

export default function App(){
    const [tela, setTela] = react.useState("fixo")
    return(
        <div>
            {tela === 'telaInicial' ? <Init setTela={setTela} />: <TelaFlashcards />}
        </div>
    )

}
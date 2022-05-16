import Init from "./components/Init"
import react from "react"
import TelaFlashcards from "./components/TelaFlashcards"
import './components/style.css'
import './components/reset.css'
export default function App(){
    const [tela, setTela] = react.useState("telaInicial")

   
    return(
        <div>
            {tela === 'telaInicial' ? <Init setTela={setTela} />: <TelaFlashcards setTela={setTela} />}
        </div>
    )

}

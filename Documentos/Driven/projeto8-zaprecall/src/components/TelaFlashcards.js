import Flashcards from "./Flashcards"

export default function TelaFlashcards(){
    return(
        <>
            <div className="Corpo">
                <header className="TelaFlash">
                    <img src="assets/images/logo.png" alt="" />
                    <h1>ZapRecall</h1>
                </header>
            <Flashcards />
            </div>
        </>
    )
}
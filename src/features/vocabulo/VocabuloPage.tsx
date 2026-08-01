import "../home/HomePage.css";
import Linha from "./components/Linha.tsx";
import { useVocabuloGame } from "./hooks/useVocabuloGame";

function Vocabulo() {
    const {
        tentativaAtual,
        tentativas,
        linhaAtual,
    } = useVocabuloGame();

    return (
        <>
            <section>
                <nav>
                    <h1>VOCABULO</h1>
                </nav>
            </section>

            <section className="mt-10">
                {Array.from({ length: 6 }).map((_, index) => (
                    <Linha
                        key={index}
                        letras={tentativas[index]}
                        tentativaAtual={
                            index === linhaAtual
                                ? tentativaAtual
                                : ""
                        }
                    />
                ))}
            </section>
        </>
    );
}

export default Vocabulo;
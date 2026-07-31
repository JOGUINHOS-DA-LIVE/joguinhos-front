import './App.css'
import Quadradin from "./Quadradin.tsx";

function Vocabulo() {
    return (
        <>
            <section>
                <nav>
                    <h1>VOCABULO</h1>
                </nav>
            </section>
            <section className="mt-10">
                <Quadradin />
                <Quadradin />
                <Quadradin />
                <Quadradin />
                <Quadradin />
                <Quadradin />
            </section>
        </>
    )
}

export default Vocabulo;
import Titulo from './assets/titulo.png';
import bonequinho from './assets/bonequinho_de_login.png';


function Home() {
    return (
        <>

            <h1 className="text-10xl font-bold underline">
                Hello world!
            </h1>

            <div>
                <img src={Titulo} alt="Titulo" />
            </div>

            <div >
                <img src={bonequinho} alt="Bonequinho" />
            </div>
        </>
    )
}

export default Home
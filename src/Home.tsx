import Titulo from './assets/titulo.png';
import bonequinho from './assets/bonequinho_de_login.png';
import twitch from './assets/integracao_twitch.png';
import { useNavigate } from 'react-router';
import './Home.css'


function Home() {

    const navigate = useNavigate();

    return (
        <>
            {/* título */}
            <div className="flex items-center justify-center gap-10 mt-15">
                <div>
                    <img src={bonequinho} alt="Bonequinho" />
                </div>
                <div>
                    <img src={Titulo} alt="Titulo" />
                </div>
                <div>
                    <img src={twitch} alt="Twitch" />
                </div>
            </div>

            {/* área dos jogos */}
            <div className="border-5 border-[#BE02E7] shadow-md shadow-yellow-200 h-50 m-30">
                <div className="grid grid-cols-3 gap-4">
                    <div 
                        className="counter"
                        onClick={() => navigate('/vocabulo')}
                    > Termo </div>
                    <div className="counter"> Contexto </div>
                    <div className="counter"> Conexo </div>
                </div>
            </div>
        </>
    )
}

export default Home
import type { EstadoLetra } from "../types/EstadoLetra.type";


interface LetraProps {
    letra: string;
    estado: EstadoLetra;
}

function Letra({ letra, estado }: LetraProps) {

    const cores = {
        vazia: 'border-[#BE02E7]',
        correta: 'border-green-500 bg-green-500',
        presente: 'border-yellow-400 bg-yellow-400',
        incorreta: 'border-gray-500 bg-gray-500',
    };

    return (
        <div
            className={`
                border-5
                rounded-lg
                shadow-md
                shadow-yellow-200
                w-16
                h-16
                flex
                items-center
                justify-center
                ${cores[estado]}
            `}
        >
            <p className="text-2xl font-bold">
                {letra}
            </p>
        </div>
    );
}

export default Letra;
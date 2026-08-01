import Letra from "./Letra.tsx";
import type { EstadoLetra } from "../types/EstadoLetra.type";

interface LetraData {
    letra: string;
    estado: EstadoLetra;
}

interface LinhaProps {
    letras: LetraData[];
    tentativaAtual?: string;
}

function Linha({ letras = [],  tentativaAtual = ""  }: LinhaProps) {
    return (
        <div className="flex justify-center mb-3 gap-1">
            {Array.from({ length: 5 }).map((_, index) => {
                const letra = letras[index];

                return (
                    <Letra
                        key={index}
                        letra={letra?.letra ?? tentativaAtual[index] ?? ""}
                        estado={letra?.estado ?? "vazia"}
                    />
                );
            })}
        </div>
    );
}

export default Linha;
import { useCallback, useEffect, useState } from "react";
import type { LetraData } from "../types/EstadoLetra.type";

const MAX_TENTATIVAS = 6;
const TAMANHO_PALAVRA = 5;
const PALAVRA_SECRETA = "PINTO";

export function useVocabuloGame() {
    const [tentativaAtual, setTentativaAtual] = useState("");
    const [tentativas, setTentativas] = useState<LetraData[][]>([]);
    const [linhaAtual, setLinhaAtual] = useState(0);

    const adicionarLetra = useCallback((letra: string) => {
        setTentativaAtual((atual) => {
            if (atual.length >= TAMANHO_PALAVRA || linhaAtual >= MAX_TENTATIVAS) {
                return atual;
            }

            return atual + letra;
        });
    }, [linhaAtual]);

    const removerLetra = useCallback(() => {
        setTentativaAtual((atual) => atual.slice(0, -1));
    }, []);

    const avaliarTentativa = useCallback((tentativa: string): LetraData[] => {
        return tentativa.split("").map((letra, index) => {
            if (letra === PALAVRA_SECRETA[index]) {
                return {
                    letra,
                    estado: "correta",
                };
            }

            if (PALAVRA_SECRETA.includes(letra)) {
                return {
                    letra,
                    estado: "presente",
                };
            }

            return {
                letra,
                estado: "incorreta",
            };
        });
    }, []);

    const enviarTentativa = useCallback(() => {
        if (linhaAtual >= MAX_TENTATIVAS) {
            return;
        }

        if (tentativaAtual.length !== TAMANHO_PALAVRA) {
            return;
        }

        if (tentativaAtual === PALAVRA_SECRETA) {
            return;
        }

        const resultado = avaliarTentativa(tentativaAtual);

        setTentativas((atual) => [...atual, resultado]);
        setTentativaAtual("");
        setLinhaAtual((atual) => atual + 1);
    }, [avaliarTentativa, linhaAtual, tentativaAtual]);

    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent) {
            if (/^[a-zA-Z]$/.test(event.key)) {
                adicionarLetra(event.key.toUpperCase());
                return;
            }

            if (event.key === "Backspace") {
                removerLetra();
                return;
            }

            if (event.key === "Enter") {
                enviarTentativa();
            }
        }

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [adicionarLetra, enviarTentativa, removerLetra]);

    return {
        tentativaAtual,
        tentativas,
        linhaAtual,
        palavraSecreta: PALAVRA_SECRETA,
        enviarTentativa,
    };
}

export type EstadoLetra =
    | 'vazia'
    | 'correta'
    | 'presente'
    | 'incorreta';

export interface LetraData {
    letra: string;
    estado: EstadoLetra;
}
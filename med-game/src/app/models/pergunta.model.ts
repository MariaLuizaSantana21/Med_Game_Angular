export interface Pergunta{
    id: number;
    pergunta: string;
    alternativas: Array<string>;
    resposta: number;
    explicacao: string;
}
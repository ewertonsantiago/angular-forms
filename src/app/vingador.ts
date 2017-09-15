export class Vingador {
    id: number;
    nome_heroi: string;
    pessoa: string;

    constructor(id: number, nome_heroi: string, pessoa?: string) {
        this.id = id;
        this.nome_heroi = nome_heroi;
        this.pessoa = pessoa;
    }
}
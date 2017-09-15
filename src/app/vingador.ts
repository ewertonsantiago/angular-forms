export class Vingador {
    id: number;
    nome_heroi: string;
    pessoa: string;
    URL: string;

    constructor(id: number, nome_heroi: string, pessoa?: string, URL?: string) {
        this.id = id;
        this.nome_heroi = nome_heroi;
        this.pessoa = pessoa;
        this.URL = URL
    }
}
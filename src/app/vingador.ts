export class Vingador {
    id: number;
    nome_heroi: string;
    pessoa: string;
    url: string;

    constructor(id: number, nome_heroi: string, pessoa?: string, url?: string) {
        this.id = id;
        this.nome_heroi = nome_heroi;
        this.pessoa = pessoa;
        this.url = url
    }
}
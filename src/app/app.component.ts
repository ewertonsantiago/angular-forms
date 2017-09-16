import { Component, OnInit } from '@angular/core';
import { Vingador } from './vingador';
import '../assets/css/style.css';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title: string;
    vingadores: Array<Vingador>;
    selecionado: Vingador;
    novo: Vingador = new Vingador(0, '', '');
    closeResult: string;

    constructor(private modalService: NgbModal) {
        this.title = 'Vingadores';
        this.vingadores = [
            new Vingador(1, 'Capitão América', 'Steve Rogers','https://upload.wikimedia.org/wikipedia/pt/b/bc/Steven_Rogers_%28Earth-616%29.jpg'),
            new Vingador(2, 'Viúva Negra', 'Natasha Romanoff','https://upload.wikimedia.org/wikipedia/pt/1/1c/Black_Widow_Vol_6_12.jpg'),
            new Vingador(3, 'Ms. Marvel', 'Carol Danvers','https://upload.wikimedia.org/wikipedia/pt/2/20/Captain_Marvel_Vol_9_3.jpg'),
            new Vingador(4, 'Deadpool', 'Wade Wilson','https://upload.wikimedia.org/wikipedia/pt/c/ce/Deadpool_Vol_4_7.jpg'),
            new Vingador(5, 'Gavião Arqueiro', 'Clint Barton','https://upload.wikimedia.org/wikipedia/pt/c/cc/Gavi%C3%A3o_Arqueiro_por_Clint_Langley.JPG'),
            new Vingador(6, 'Dentes de Sabre', 'Victor Creed','https://upload.wikimedia.org/wikipedia/pt/b/bf/Dentes-de-Sabre_por_Robert_Atkins.jpg')
        ];
    }

    open(content) {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
    } else {
        return  `with: ${reason}`;
    }
    }

    ngOnInit(): void {
    }

    heroiSelecionado(vingador: Vingador): void {
        this.selecionado = vingador;
    }

    cadastrar(): void {
        const novoId: number = this.vingadores.length + 1;
        this.vingadores.push(new Vingador(novoId, this.novo.nome_heroi, this.novo.pessoa, this.novo.url));
        this.novo = new Vingador(0, '', '', '');
    }

    excluir(): void{
        var id : number = this.vingadores.indexOf(this.selecionado);
        this.vingadores.splice(id, 1)
    }

}

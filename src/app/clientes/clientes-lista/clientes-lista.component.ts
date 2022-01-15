import { Component, OnInit } from '@angular/core';
import {Cliente} from "../cliente";
import {ClientesService} from "../../clientes.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {

  clientes: Cliente[] = [];
  clienteSelecionado!: Cliente;
  mensagemSucesso!: String;
  mensagemErro!: String;


  constructor(
    private service: ClientesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service
      .getCliente()
      .subscribe(resposta => this.clientes = resposta);
  }

  novoCadatro(){
    this.router.navigate(['/clientes-form'])
  }

  preparaDelecao(cliente: Cliente){
    this.clienteSelecionado = cliente;
  }

  deletarCliente(){
    this.service
      .deletarCliente(this.clienteSelecionado)
      .subscribe(response => {
        this.mensagemSucesso = 'Cliente deletado com sucesso.'
        this.ngOnInit();
        },
                      erro => this.mensagemErro = 'Ocorreu um erro na hora de deletar o cliente')


  }

}

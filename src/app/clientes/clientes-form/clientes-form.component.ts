import { Component, OnInit } from '@angular/core';
import {Cliente} from "../cliente";
import {ClientesService} from '../../clientes.service'
import {Router, ActivatedRoute, Params} from '@angular/router'
import {param} from "jquery";


@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;
  sucess: boolean = false;
  errors!: String[];
  id!: number;


  constructor(
    private service: ClientesService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.cliente = new Cliente();
  }

    ngOnInit(): void {
      let params = this.activatedRoute.params;
      params.forEach( value =>{
        if(value['id']){
          this.id = value['id'];
          this.service
            .getClienteById(this.id)
            .subscribe(
              response => this.cliente = response,
              errorResponse => this.cliente = new Cliente()
            )
        }
      });

    }

  onSubmit(){
    if (this.id){
      this.service
        .atualizar(this.cliente)
        .subscribe(response =>{
          this.sucess = true;
          this.errors = [];
        }, errorResponse => {
          this.errors = ['Erro ao atualizar o cliente.']
          }
          )
    }else{

    this.service
      .salvar(this.cliente)
      .subscribe(response =>{
        this.sucess = true;
        this.errors = [];
        this.cliente = response;
      }, errorResponse =>{
        this.sucess = false;
        this.errors = errorResponse.error.errors;

      })
  }
  }

  clicar(){
      console.log(this.cliente)
  }

  voltarParaListagem(){
    this.router.navigate(['clientes-lista'])
  }
}

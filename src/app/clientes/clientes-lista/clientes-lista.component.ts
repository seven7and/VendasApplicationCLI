import { Component, OnInit } from '@angular/core';
import {Cliente} from "../cliente";
import {ClientesService} from "../../clientes.service";

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {

  cliente: Cliente[] = [];

  constructor(private service: ClientesService ) { }

  ngOnInit(): void {
  }

}

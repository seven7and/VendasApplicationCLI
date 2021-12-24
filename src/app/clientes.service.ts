import { Injectable } from '@angular/core';
import { Cliente } from './clientes/cliente'
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  salvar(cliente: Cliente) : Observable<any>{
    return this.http.post('http://localhost:8080/api/clientes', cliente);
  }

  getCliente() : Observable<Cliente[]> | null {
    return null;
  }
}

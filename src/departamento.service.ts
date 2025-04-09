import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departamento } from './departaento.model';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {
  private apiUrl = '/api/departamentos';

  constructor(private http: HttpClient) {

  }


  insertarDepartamento(departamento: Departamento): Observable<any> {
    return this.http.post(this.apiUrl, departamento);
  }
}

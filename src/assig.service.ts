import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssigService {
  private apiUrl = '/api';

  constructor(private http: HttpClient) {}

  getAssignatures(): Observable<any> {
    return this.http.get(`${this.apiUrl}/llistaAssigFradera`);
  }

  getAlumnoConNota10(): Observable<any> {
    return this.http.get(`${this.apiUrl}/alumnoConNota10`); // Ajusta la ruta según tu backend
  }
}




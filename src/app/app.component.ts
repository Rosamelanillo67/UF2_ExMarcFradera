import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AssigService} from "../assig.service";
import { HttpClientModule } from '@angular/common/http';
import { Departamento } from '../departaento.model';
import {DepartamentoService} from "../departamento.service";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'ExamenUF2accesD';
  assignatures: any[] = [];
  alumnoConNota10: any;
  nuevoDepartamento: Departamento = { nombre: '', descripcion: '' };

  constructor(private assigService: AssigService, private departamentoService: DepartamentoService) {}

  ngOnInit(): void {

    this.assigService.getAssignatures().subscribe({
      next: (data) => {
        this.assignatures = data;
        console.log(this.assignatures);
      },
      error: (error) => {
        console.error('Error en la solicitud HTTP:', error);
      }
    });

    this.assigService.getAlumnoConNota10().subscribe({
      next: (data) => {
        this.alumnoConNota10 = data;
        console.log(this.alumnoConNota10);
      },
      error: (error) => {
        console.error('Error en la solicitud HTTP:', error);
      }
    });
  }

  insertarDepartamento(): void {
    this.departamentoService.insertarDepartamento(this.nuevoDepartamento)
      .subscribe(
        (data) => {
          console.log('Departamento insertado correctamente:', data);
        },
        (error) => {
          console.error('Error al insertar departamento:', error);
        }
      );
  }
}



import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudiante, ParticipanteExterno } from '../modelo/proyectos';

@Injectable({
  providedIn: 'root' // Asegúrate de tener este providedIn en tu servicio
})

export class ParticipantesExternosService {
  
  constructor(private http: HttpClient) { }

  private apiParticipanteExterno = 'http://pruebabackend-86ba2adf9f62.herokuapp.com/participantesExternos';

  getParticipantesExternos(): Observable<ParticipanteExterno[]> {
      return this.http.get<any>(`${this.apiParticipanteExterno}`);
  }

  crearParticipantesExternos(proyecto: Estudiante): Observable<ParticipanteExterno> {
      return this.http.post<ParticipanteExterno>(this.apiParticipanteExterno, proyecto);
  }
}
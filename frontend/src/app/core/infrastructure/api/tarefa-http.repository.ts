import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarefa } from '../../domain/models/tarefa.model';
import { TarefaRepository } from '../../domain/repositories/tarefa.repository';
import { map } from 'rxjs/operators';

@Injectable()
export class TarefaHttpRepository implements TarefaRepository {
  private apiUrl = 'http://localhost:8000/api/tarefas';

  constructor(private http: HttpClient) {}

  listar(): Observable<Tarefa[]> {
    return this.http.get<{ data: Tarefa[] }>(this.apiUrl).pipe(
      map(response => response.data)
    );
  }

  adicionar(title: string): Observable<Tarefa> {
    return this.http.post<{ data: Tarefa }>(this.apiUrl, { title }).pipe(
      map(response => response.data)
    );
  }

  remover(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

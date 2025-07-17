import { Observable } from 'rxjs';
import { Tarefa } from '../models/tarefa.model';
import { InjectionToken } from '@angular/core';

export interface TarefaRepository {
  listar(): Observable<Tarefa[]>;
  adicionar(title: string): Observable<Tarefa>;
  remover(id: number): Observable<void>;
}

export const TAREFA_REPOSITORY = new InjectionToken<TarefaRepository>('TarefaRepository');

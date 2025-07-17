import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarefa } from '../models/tarefa.model';
import { TarefaRepository, TAREFA_REPOSITORY } from '../repositories/tarefa.repository';

@Injectable({ providedIn: 'root' })
export class AdicionarTarefaUseCase {
  constructor(@Inject(TAREFA_REPOSITORY) private tarefaRepository: TarefaRepository) {}

  execute(title: string): Observable<Tarefa> {
    return this.tarefaRepository.adicionar(title);
  }
} 
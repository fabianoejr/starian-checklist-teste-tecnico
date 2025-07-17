import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { TarefaRepository, TAREFA_REPOSITORY } from '../repositories/tarefa.repository';

@Injectable({ providedIn: 'root' })
export class RemoverTarefaUseCase {
  constructor(@Inject(TAREFA_REPOSITORY) private tarefaRepository: TarefaRepository) {}

  execute(id: number): Observable<void> {
    return this.tarefaRepository.remover(id);
  }
} 
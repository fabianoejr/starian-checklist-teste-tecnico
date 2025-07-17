import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarefa } from '../models/tarefa.model';
import { TarefaRepository, TAREFA_REPOSITORY } from '../repositories/tarefa.repository';
import { Inject } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ListarTarefasUseCase {
  constructor(@Inject(TAREFA_REPOSITORY) private tarefaRepository: TarefaRepository) {}

  execute(): Observable<Tarefa[]> {
    return this.tarefaRepository.listar();
  }
}

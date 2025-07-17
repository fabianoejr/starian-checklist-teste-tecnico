import { Injectable } from '@angular/core';
import { ListarTarefasUseCase } from '../../domain/use-cases/listar-tarefas.usecase';
import { AdicionarTarefaUseCase } from '../../domain/use-cases/adicionar-tarefa.usecase';
import { RemoverTarefaUseCase } from '../../domain/use-cases/remover-tarefa.usecase';

@Injectable({ providedIn: 'root' })
export class TarefaService {
  constructor(
    private listarTarefasUseCase: ListarTarefasUseCase,
    private adicionarTarefaUseCase: AdicionarTarefaUseCase,
    private removerTarefaUseCase: RemoverTarefaUseCase
  ) {}

  listarTarefas() {
    return this.listarTarefasUseCase.execute();
  }

  adicionarTarefa(title: string) {
    return this.adicionarTarefaUseCase.execute(title);
  }

  removerTarefa(id: number) {
    return this.removerTarefaUseCase.execute(id);
  }
}

import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../../application/services/tarefa.service';
import { Tarefa } from '../../../domain/models/tarefa.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../../shared/components/buttons/button.component';
import { InputComponent } from '../../../shared/components/inputs/input.component';
import { TarefaItemComponent } from './tarefa-item.component';

@Component({
  selector: 'app-tarefas',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, ButtonComponent, InputComponent, TarefaItemComponent],
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.scss']
})

export class TarefasComponent {
  title = 'Lista de Tarefas';
  newTodo: Partial<Tarefa> = { title: '', completed: false };
  todos: Tarefa[] = [];
  loading = false;

  constructor(private tarefaService: TarefaService) {
    this.carregarTarefas();
  }

  carregarTarefas() {
    this.loading = true;
    this.tarefaService.listarTarefas().subscribe({
      next: (tarefas) => {
        this.todos = tarefas;
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  addTodo() {
    const title = this.newTodo.title?.trim();
    if (!title) return;
    this.tarefaService.adicionarTarefa(title).subscribe({
      next: (tarefa) => {
        this.todos = [...this.todos, tarefa];
        this.newTodo.title = '';
      }
    });
  }

  removeTodo(id: number) {
    this.tarefaService.removerTarefa(id).subscribe({
      next: () => {
        this.todos = this.todos.filter(todo => todo.id !== id);
      }
    });
  }
}

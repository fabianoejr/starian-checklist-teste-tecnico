import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tarefa } from '../../../domain/models/tarefa.model';
import { ButtonComponent } from '../../../shared/components/buttons/button.component';

@Component({
  selector: 'app-tarefa-item',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './tarefa-item.component.html',
  styleUrls: ['./tarefa-item.component.scss']
})
export class TarefaItemComponent {
  @Input() tarefa!: Tarefa;
  @Input() loading = false;
  @Output() remover = new EventEmitter<void>();
} 
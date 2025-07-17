import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() label = '';
  @Input() type: 'button' | 'submit' = 'button';
  @Input() color = '#4CAF50';
  @Input() textColor = 'white';
  @Input() marginLeft = '';
  @Input() disabled = false;
  @Output() onClick = new EventEmitter<Event>();
} 
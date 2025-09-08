import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'ui-button',
  templateUrl: './button.html',
  styleUrls: ['./button.css'],
})
export class UiButtonComponent {
  @Input() variant: 'default' | 'primary' | 'ghost' = 'default';
  @Input() disabled = false;
  @Output() clicked = new EventEmitter<void>();
}

import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'ui-card',
  templateUrl: './card.html',
  styleUrls: ['./card.css'],
})
export class UiCardComponent {
  @Input() title?: string;
}

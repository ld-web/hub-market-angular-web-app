import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'ui-badge',
  templateUrl: './badge.html',
  styleUrls: ['./badge.css'],
})
export class UiBadgeComponent {
  @Input() variant: 'neutral'|'warning'|'danger' = 'neutral';
}

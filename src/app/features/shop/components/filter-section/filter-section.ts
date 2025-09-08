import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter-section',
  imports: [],
  templateUrl: './filter-section.html',
  styleUrl: './filter-section.css'
})
export class FilterSectionComponent {
@Input() likedCount!: number
@Input() categories!: string[]

@Input() availableChecked!: boolean
@Output() availableCheckedChange = new EventEmitter()

onAvailableCheckedChange(event: Event){
  const checked = (event.target as HTMLInputElement).checked;
  this.availableCheckedChange.emit(checked)
}
}

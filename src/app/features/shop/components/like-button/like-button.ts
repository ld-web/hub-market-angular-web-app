import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroHeartSolid } from '@ng-icons/heroicons/solid';

@Component({
  selector: 'app-like-button',
  imports: [NgIcon],
  providers: [provideIcons({ heroHeartSolid })],
  templateUrl: './like-button.html',
  styleUrl: './like-button.css',
})
export class LikeButton {
  @Input() liked!: boolean;
  @Output() likedChange = new EventEmitter<boolean>();

  setLike() {
    this.likedChange.emit(!this.liked);
    console.log(this.liked)
  }
}

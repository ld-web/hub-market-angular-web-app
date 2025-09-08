import { Component, Input } from '@angular/core';
import { Route, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-link',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-link.html',
  styleUrl: './nav-link.css'
})
export class NavLink {
@Input() path!: string
@Input() title!: string
}

import { Component, computed, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Nav } from '../nav/nav';
import { AuthService } from '../../../../core/services/auth-service/auth-service';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [RouterLink, Nav],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header {
   private readonly auth = inject(AuthService);

  readonly isAuth = this.auth.isAuthenticated;
  readonly user = this.auth.user;

  // première lettre du nom
  readonly initial = computed(() => this.user()?.name?.charAt(0).toUpperCase() ?? '?');

  logout() {
    this.auth.logout();
  }
}

import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  onServerLoad(): void {
    this.router.navigate(['servers'], { relativeTo: this.route });
    //    OR this.router.navigate(['/servers']);
  }

  onLogin(): void {
    this.authService.login();
  }

  onLogout(): void {
    this.authService.logout();
  }
}

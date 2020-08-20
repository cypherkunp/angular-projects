import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  onServerLoad(): void {
    this.router.navigate(['servers'], { relativeTo: this.route });
    //    OR this.router.navigate(['/servers']);
  }
}

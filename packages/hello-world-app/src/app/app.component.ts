import { Component } from '@angular/core';
import { ServerComponent } from './server/server.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'hello-world-app';
  name = 'Devvrat';
}

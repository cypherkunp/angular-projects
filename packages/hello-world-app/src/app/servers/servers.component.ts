import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverName = '';
  serverCreationStatus = '';
  serverCreated = false;
  servers = ['Test', 'UAT'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 4000);
  }

  ngOnInit(): void {}

  onCreateServer(): void {
    this.serverCreationStatus = `Server was created!`;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: Event): void {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}

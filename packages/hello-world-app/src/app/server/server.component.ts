import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  template:
    '<p class="server-info" [ngStyle]="getStyles()">Server with id {{serverId}} is {{serverStatus}} </p>',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent {
  serverId = Math.floor(Math.random() * 100000);
  serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';

  getStyles() {
    const onlineStyle = { 'background-color': 'lightGreen', border: '1px solid green' };
    const offlineStyle = { 'background-color': 'lightCoral', border: '1px solid red' };

    return this.serverStatus === 'Online' ? onlineStyle : offlineStyle;
  }
}

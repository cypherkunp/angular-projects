import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements = [{ type: 'server', name: 'Test', content: 'Some' }];

  onServerAdd(serverData: { serverName: string; serverContent: string }): void {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBlueprintAdd(blueprintData: { serverName: string; serverContent: string }): void {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
    });
  }

  onChangeFirst(): void {
    if (!this.serverElements.length) return;

    this.serverElements[0].name = 'Name Changed!';
    this.serverElements[0].content = 'Content Changed!';
  }

  onRemoveFirst(): void {
    if (!this.serverElements.length) return;

    this.serverElements.shift();
  }
}

import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { CanComponentDeactivate } from './can-deactivate-guard.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: { id: number; name: string; status: string };
  allowEdit: boolean;
  serverName = '';
  serverStatus = '';
  changesSaved = false;

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const serverId = this.route.snapshot.params['id'];
    this.allowEdit = this.route.snapshot.queryParams['allowEdit'];
    this.server = this.serversService.getServer(+serverId);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer(): void {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });

    this.changesSaved = true;
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  canDeactivate() {
    if (!this.allowEdit) {
      return true;
    } else if (
      (this.serverName !== this.server.name || this.serverStatus !== this.server.status) &&
      !this.changesSaved
    ) {
      return confirm('Do you want to discard the changes?');
    } else {
      return true;
    }
  }
}

import { ActivatedRoute, Params, Router, Data } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string };

  constructor(
    private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // const serverID = this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(+serverID);

    // this.route.params.subscribe(
    //   (params: Params) => (this.server = this.serversService.getServer(+params['id']))
    // );
    this.route.data.subscribe((data: Data) => {
      this.server = data['server'];
    });
  }

  onEdit(): void {
    this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: 'preserve' });
  }
}

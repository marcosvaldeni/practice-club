import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from 'express';
import { ServersService } from 'src/app/shared/servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  public server: { id: number; name: string; status: string };

  constructor(
    private serverService: ServersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id: number = Number(this.route.snapshot.params['id']);
    this.server = this.serverService.getServer(id);
    this.route.params.subscribe((params: Params) => {
      this.server = this.serverService.getServer(params['id']);
      } 
    );
  }
}

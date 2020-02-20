import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { SidebarService } from '../sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @ViewChild('sidenav', { static: true }) public sidenav: MatSidenav;

  constructor(private SidebarService: SidebarService) {
  }

  ngOnInit() {
    this.SidebarService.sideNavToggleSubject.subscribe(() => {
      this.sidenav.toggle();
    });
  }

}

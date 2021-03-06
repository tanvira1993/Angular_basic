import { Component } from '@angular/core';
import { SidebarService } from '../sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  title: string = "My App";

  constructor(private SidebarService: SidebarService) {

  }

  clickMenu() {
    this.SidebarService.toggle();
  }

}

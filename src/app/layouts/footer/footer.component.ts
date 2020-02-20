import { Component } from '@angular/core';
import { SidebarService } from '../sidebar.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  title: string = "Footer";
  constructor(private SidebarService: SidebarService) {

  }

  ngOnInit() {
  }

  clickMenu() {
    this.SidebarService.toggle();
  }

}

import { Component, OnInit } from '@angular/core';
declare const $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'drawerLayout';
  public siteUrl = window.location.href;
  ngOnInit() {
    $(document).ready(function () {
      alert('I am Called From jQuery');
    });
    console.log('log', this.siteUrl);
  }

  public hello = 'hello from parent'

  clickButton() {
    alert('I am from Angular 8 click Event');
  }
}

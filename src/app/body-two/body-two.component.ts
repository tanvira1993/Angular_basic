import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-two',
  templateUrl: './body-two.component.html',
  styleUrls: ['./body-two.component.scss']
})
export class BodyTwoComponent implements OnInit {
  public topics = ["AngularJs","React","Angular", "Redux","Vue"]
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-body-one',
  templateUrl: './body-one.component.html',
  styleUrls: ['./body-one.component.scss']
})
export class BodyOneComponent implements OnInit {

  bioSection = new FormGroup({
    city: new FormControl(''),
    state: new FormControl('')
  });

  public isDisabled = false
  public condition = true
  public conditionColor = "red"

  public name = ""

  public ngIfCheck  = true

  public classesVar = {
    'text-special': true

  }

  public switch = 't'
  @Input() public parenDate;
  @Output() public helloFromChild = new EventEmitter()

  fireEvent(){
    this.helloFromChild.emit('I am from child')
    console.log('log log')
  }

  public styleClass = {
    fontStyle: "italic",
    color: "blue"
  }
  public greet = 'd'

  constructor() {

  }

  public ngForLoop = ['hello', 'one', 'two', 'three', 'four'];

  templateReference = (v: any) => {
    console.log('log', v);
    console.log('log');
  }

  clickEvent = () => {
    alert('hello, from click event')
  }

  clickEventListen = (event) => {
    alert(event)
    console.log(event)

  }

  callingFunction() {
    console.log('hello');
    console.log(this.bioSection.value);
  }

  ngOnInit() {
  }

}

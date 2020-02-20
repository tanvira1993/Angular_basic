import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyOneComponent } from './body-one.component';

describe('BodyOneComponent', () => {
  let component: BodyOneComponent;
  let fixture: ComponentFixture<BodyOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

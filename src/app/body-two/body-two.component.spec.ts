import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyTwoComponent } from './body-two.component';

describe('BodyTwoComponent', () => {
  let component: BodyTwoComponent;
  let fixture: ComponentFixture<BodyTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortAnswerCreateComponent } from './short-answer-create.component';

describe('ShortAnswerCreateComponent', () => {
  let component: ShortAnswerCreateComponent;
  let fixture: ComponentFixture<ShortAnswerCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortAnswerCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortAnswerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

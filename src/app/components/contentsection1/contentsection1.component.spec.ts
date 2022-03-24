import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contentsection1Component } from './contentsection1.component';

describe('Contentsection1Component', () => {
  let component: Contentsection1Component;
  let fixture: ComponentFixture<Contentsection1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Contentsection1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Contentsection1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

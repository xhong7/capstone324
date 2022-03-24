import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoformComponent } from './logoform.component';

describe('LogoformComponent', () => {
  let component: LogoformComponent;
  let fixture: ComponentFixture<LogoformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

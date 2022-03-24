import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilepicformComponent } from './profilepicform.component';

describe('ProfilepicformComponent', () => {
  let component: ProfilepicformComponent;
  let fixture: ComponentFixture<ProfilepicformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilepicformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilepicformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

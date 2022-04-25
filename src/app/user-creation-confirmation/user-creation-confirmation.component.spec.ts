import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCreationConfirmationComponent } from './user-creation-confirmation.component';

describe('UserCreationConfirmationComponent', () => {
  let component: UserCreationConfirmationComponent;
  let fixture: ComponentFixture<UserCreationConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCreationConfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCreationConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

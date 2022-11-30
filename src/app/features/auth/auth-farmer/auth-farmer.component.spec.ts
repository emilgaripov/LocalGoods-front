import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthFarmerComponent } from './auth-farmer.component';

describe('AuthFarmerComponent', () => {
  let component: AuthFarmerComponent;
  let fixture: ComponentFixture<AuthFarmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthFarmerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthFarmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

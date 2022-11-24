import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerFarmComponent } from './farmer-farm.component';

describe('FarmerFarmComponent', () => {
  let component: FarmerFarmComponent;
  let fixture: ComponentFixture<FarmerFarmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerFarmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmerFarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

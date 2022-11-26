import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFarmsComponent } from './top-farms.component';

describe('TopFarmsComponent', () => {
  let component: TopFarmsComponent;
  let fixture: ComponentFixture<TopFarmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopFarmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopFarmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

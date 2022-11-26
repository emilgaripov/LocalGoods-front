import { TestBed } from '@angular/core/testing';

import { FarmerFarmsService } from './farmer-farms.service';

describe('FarmerFarmsService', () => {
  let service: FarmerFarmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FarmerFarmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

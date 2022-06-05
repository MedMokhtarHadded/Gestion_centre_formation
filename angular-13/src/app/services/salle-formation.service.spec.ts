import { TestBed } from '@angular/core/testing';

import { SalleFormationService } from './salle-formation.service';

describe('SalleFormationService', () => {
  let service: SalleFormationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalleFormationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

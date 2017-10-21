import { TestBed, inject } from '@angular/core/testing';

import { KommuneService } from './kommune.service';

describe('KommuneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KommuneService]
    });
  });

  it('should be created', inject([KommuneService], (service: KommuneService) => {
    expect(service).toBeTruthy();
  }));
});

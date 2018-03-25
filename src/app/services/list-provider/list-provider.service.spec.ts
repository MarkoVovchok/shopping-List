import { TestBed, inject } from '@angular/core/testing';

import { ListProviderService } from './list-provider.service';

describe('ListProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListProviderService]
    });
  });

  it('should be created', inject([ListProviderService], (service: ListProviderService) => {
    expect(service).toBeTruthy();
  }));
});

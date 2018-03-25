import { TestBed, inject } from '@angular/core/testing';

import { ProductCrudService } from './product-crud.service';

describe('ProductCrudService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductCrudService]
    });
  });

  it('should be created', inject([ProductCrudService], (service: ProductCrudService) => {
    expect(service).toBeTruthy();
  }));
});

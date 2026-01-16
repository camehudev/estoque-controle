import { TestBed } from '@angular/core/testing';

import { ProductsServiceTransferService } from './products-service-transfer.service';

describe('ProductsServiceTransferService', () => {
  let service: ProductsServiceTransferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsServiceTransferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

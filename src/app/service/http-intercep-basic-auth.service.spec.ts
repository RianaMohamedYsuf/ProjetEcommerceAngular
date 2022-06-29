import { TestBed } from '@angular/core/testing';

import { HttpIntercepBasicAuthService } from './http-intercep-basic-auth.service';

describe('HttpIntercepBasicAuthService', () => {
  let service: HttpIntercepBasicAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpIntercepBasicAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ApiBaseUrlInterceptor } from './api-base-url.interceptor';

describe('ApiBaseUrlInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiBaseUrlInterceptor = TestBed.get(ApiBaseUrlInterceptor);
    expect(service).toBeTruthy();
  });
});

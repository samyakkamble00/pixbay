import { TestBed } from '@angular/core/testing';
import { HttpHeaders } from '@angular/common/http';

import { PexelPhotoService } from './pexel-photo.service';

describe('PexelPhotoService', () => {
  let service: PexelPhotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PexelPhotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

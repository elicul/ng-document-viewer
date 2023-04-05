import { TestBed } from '@angular/core/testing';

import { NgxDocumentViewerService } from './ngx-document-viewer.service';

describe('NgxDocumentViewerService', () => {
  let service: NgxDocumentViewerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxDocumentViewerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDocumentViewerComponent } from './ngx-document-viewer.component';

describe('NgxDocumentViewerComponent', () => {
  let component: NgxDocumentViewerComponent;
  let fixture: ComponentFixture<NgxDocumentViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxDocumentViewerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgxDocumentViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

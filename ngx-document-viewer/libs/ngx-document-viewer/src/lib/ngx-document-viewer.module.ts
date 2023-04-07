import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentViewerComponent } from './containers/document-viewer/document-viewer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ImageComponent } from './components/image/image.component';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    DocumentViewerComponent,
    HeaderComponent,
    SidebarComponent,
    ImageComponent,
    ThumbnailComponent,
  ],
  exports: [
    DocumentViewerComponent,
    HeaderComponent,
    SidebarComponent,
    ImageComponent,
    ThumbnailComponent,
  ],
})
export class NgxDocumentViewerModule {}

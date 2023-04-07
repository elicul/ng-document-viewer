import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { NgxDocumentViewerModule } from "ngx-document-viewer";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxDocumentViewerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

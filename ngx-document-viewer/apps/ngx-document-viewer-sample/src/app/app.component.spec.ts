import { TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { NxWelcomeComponent } from "./nx-welcome.component";

describe("AppComponent", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [AppComponent, NxWelcomeComponent],
    }).compileComponents();
  });

  it("should render title", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector("h1")?.textContent).toContain(
      "Welcome ngx-document-viewer-sample"
    );
  });

  it(`should have as title 'ngx-document-viewer-sample'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual("ngx-document-viewer-sample");
  });
});

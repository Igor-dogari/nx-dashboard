import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextEditorOverviewComponent } from './text-editor-overview.component';

describe('OverviewComponent', () => {
  let component: TextEditorOverviewComponent;
  let fixture: ComponentFixture<TextEditorOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextEditorOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextEditorOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

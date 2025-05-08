import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogScrollableContentDialogComponent } from './dialog-scrollable-content-dialog.component';

describe('DialogScrollableContentDialog', () => {
  let component: DialogScrollableContentDialogComponent;
  let fixture: ComponentFixture<DialogScrollableContentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogScrollableContentDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogScrollableContentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

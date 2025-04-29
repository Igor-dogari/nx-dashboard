import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojiPickerOverviewComponent } from './emoji-picker-overview.component';

describe('OverviewComponent', () => {
  let component: EmojiPickerOverviewComponent;
  let fixture: ComponentFixture<EmojiPickerOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmojiPickerOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmojiPickerOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

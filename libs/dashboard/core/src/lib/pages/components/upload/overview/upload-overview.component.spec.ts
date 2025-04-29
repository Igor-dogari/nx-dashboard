import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadOverviewComponent } from './upload-overview.component';

describe('OverviewComponent', () => {
  let component: UploadOverviewComponent;
  let fixture: ComponentFixture<UploadOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

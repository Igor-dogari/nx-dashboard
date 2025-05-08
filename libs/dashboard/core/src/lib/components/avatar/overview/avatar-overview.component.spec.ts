import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarOverviewComponent } from './avatar-overview.component';

describe('OverviewComponent', () => {
  let component: AvatarOverviewComponent;
  let fixture: ComponentFixture<AvatarOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvatarOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

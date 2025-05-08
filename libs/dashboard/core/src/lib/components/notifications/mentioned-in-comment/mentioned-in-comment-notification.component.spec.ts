import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentionedInCommentNotificationComponent } from './mentioned-in-comment-notification.component';

describe('MentionedInCommentNotification', () => {
  let component: MentionedInCommentNotificationComponent;
  let fixture: ComponentFixture<MentionedInCommentNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MentionedInCommentNotificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentionedInCommentNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteToEditFilesInFolderNotificationComponent } from './invite-to-edit-files-in-folder-notification.component';

describe('InviteToEditFilesInFolderNotification', () => {
  let component: InviteToEditFilesInFolderNotificationComponent;
  let fixture: ComponentFixture<InviteToEditFilesInFolderNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InviteToEditFilesInFolderNotificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InviteToEditFilesInFolderNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { AfterViewInit, Component, inject } from '@angular/core';
import { WidgetInterface, WidgetConfigInterface } from '@core';
import { DashboardComponent } from '@core';
import { AuthService } from '@auth0/auth0-angular';
import { catchError, switchMap, take } from 'rxjs/operators';
import { interval, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { SignupComponent } from '@core/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-basic',
  imports: [DashboardComponent],
  templateUrl: './dashboard-basic.component.html',
  styleUrl: './dashboard-basic.component.scss',
})
export class DashboardBasicComponent implements AfterViewInit {
  public configs: WidgetConfigInterface[] = [
    {
      type: 'total-subscribers-widget',
      skeleton: null,
      component: () =>
        import(
          '../../../@widgets/widgets/total-subscribers-widget/total-subscribers-widget.component'
        ).then((c) => c.TotalSubscribersWidgetComponent),
    },
    {
      type: 'avg-open-rate-widget',
      skeleton: null,
      component: () =>
        import(
          '../../../@widgets/widgets/avg-open-rate-widget/avg-open-rate-widget.component'
        ).then((c) => c.AvgOpenRateWidgetComponent),
    },
    {
      type: 'avg-click-rate-widget',
      skeleton: null,
      component: () =>
        import(
          '../../../@widgets/widgets/avg-click-rate-widget/avg-click-rate-widget.component'
        ).then((c) => c.AvgClickRateWidgetComponent),
    },
    {
      type: 'unique-visitors-widget',
      skeleton: null,
      component: () =>
        import(
          '../../../@widgets/widgets/unique-visitors-widget/unique-visitors-widget.component'
        ).then((c) => c.UniqueVisitorsWidgetComponent),
    },
    {
      type: 'total-tasks-widget',
      skeleton: null,
      component: () =>
        import(
          '../../../@widgets/widgets/total-tasks-widget/total-tasks-widget.component'
        ).then((c) => c.TotalTasksWidgetComponent),
    },
    {
      type: 'total-projects-widget',
      skeleton: null,
      component: () =>
        import(
          '../../../@widgets/widgets/total-projects-widget/total-projects-widget.component'
        ).then((c) => c.TotalProjectsWidgetComponent),
    },
    {
      type: 'events-widget',
      skeleton: null,
      component: () =>
        import(
          '../../../@widgets/widgets/events-widget/events-widget.component'
        ).then((c) => c.EventsWidgetComponent),
    },
    {
      type: 'team-widget',
      skeleton: null,
      component: () =>
        import(
          '../../../@widgets/widgets/team-widget/team-widget.component'
        ).then((c) => c.TeamWidgetComponent),
    },
    {
      type: 'tasks-in-progress-widget',
      component: () =>
        import(
          '../../../@widgets/widgets/tasks-in-progress-widget/tasks-in-progress-widget.component'
        ).then((c) => c.TasksInProgressWidgetComponent),
    },
    {
      type: 'todos-widget',
      skeleton: null,
      component: () =>
        import(
          '../../../@widgets/widgets/todos-widget/todos-widget.component'
        ).then((c) => c.TodosWidgetComponent),
    },
  ];
  public widgets: WidgetInterface[] = [
    {
      id: 1,
      type: 'total-subscribers-widget',
      columns: 3,
    },
    {
      id: 2,
      type: 'avg-open-rate-widget',
      columns: 3,
    },
    {
      id: 3,
      type: 'avg-click-rate-widget',
      columns: 3,
    },
    {
      id: 4,
      type: 'unique-visitors-widget',
      columns: 3,
    },
    {
      id: 5,
      type: 'total-tasks-widget',
      columns: 3,
      skeleton: {
        minHeight: '260px',
      },
    },
    {
      id: 6,
      type: 'total-projects-widget',
      columns: 3,
      skeleton: {
        minHeight: '260px',
      },
    },
    {
      id: 7,
      type: 'events-widget',
      columns: 3,
      skeleton: {
        minHeight: '260px',
      },
    },
    {
      id: 8,
      type: 'team-widget',
      columns: 3,
      skeleton: {
        minHeight: '260px',
      },
    },
    {
      id: 9,
      type: 'tasks-in-progress-widget',
      columns: 6,
      skeleton: {
        minHeight: '400px',
      },
    },
    {
      id: 10,
      type: 'todos-widget',
      columns: 6,
      skeleton: {
        minHeight: '400px',
      },
    },
  ];
  public auth = inject(AuthService);
  public dialog = inject(MatDialog);
  public router = inject(Router);

  ngAfterViewInit(): void {
    this.auth.isAuthenticated$
      .pipe(
        switchMap((isAuthenticated) => {
          if (isAuthenticated) {
            return of(true);
          } else {

            return interval(5000).pipe(
              take(1), // 🔁 retry once if failed
              switchMap(() => this.openDialog()),
              catchError((err) => {
                console.error(
                  '❌ loginWithRedirect failed:',
                  err,
                );
                return of(false);
              }),
            );
          }
        }),
      )
      .subscribe((isAuthenticated) => {
        if (isAuthenticated) {
          console.log('✅ User is authenticated');
        } else {
          console.log('❌ User is not authenticated');
        }
      });
  }

  public openDialog() {
    const dialogRef = this.dialog.open(SignupComponent, {
      width: '700px', // Medium size
      height: '400px', // Medium size
      disableClose: true, // optional: force user to use Close button
    });

    return dialogRef.afterClosed().pipe(switchMap(() =>
      this.router.navigate(['/']) // ⬅️ redirect after dialog closes
    ));
  }
}

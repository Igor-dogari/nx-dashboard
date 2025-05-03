import {
  APP_INITIALIZER,
  ApplicationConfig,
  ErrorHandler,
  inject,
  provideAppInitializer,
  provideZoneChangeDetection,
} from '@angular/core';
import {
  provideRouter,
  Router,
  TitleStrategy,
  withEnabledBlockingInitialNavigation,
  withViewTransitions,
} from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { environment } from '../environments/environment';
import {
  ENVIRONMENT,
  EnvironmentService,
  PageTitleStrategyService,
} from '@core';
import { GlobalStore, LayoutSidebarStore } from '@core';
import { provideAuth0 } from '@auth0/auth0-angular';
import * as Sentry from '@sentry/angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withEnabledBlockingInitialNavigation(),
      withViewTransitions(),
    ),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    provideStore(),
    provideNativeDateAdapter(),
    provideAppInitializer(() => {
      const envService = inject(EnvironmentService);
      const globalStore = inject(GlobalStore);
      const layoutSidebarStore = inject(LayoutSidebarStore);
      return new Promise((resolve) => {
        layoutSidebarStore.showSidebarVisibility('root', true); // show or hide main sidebar on initial state
        globalStore.setPageTitle(envService.getValue('pageTitle'));
        resolve(true);
      });
    }),
    provideAuth0({
      ...environment.auth,
      httpInterceptor: {
        ...environment.httpInterceptor,
      },
    }),
    {
      provide: ENVIRONMENT,
      useValue: environment,
    },
    {
      provide: TitleStrategy,
      useClass: PageTitleStrategyService,
    },
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler(),
    },
    {
      provide: Sentry.TraceService,
      deps: [Router],
    },
    {
      provide: APP_INITIALIZER,
      useFactory: () => () => {},
      deps: [Sentry.TraceService],
      multi: true,
    },
  ],
};

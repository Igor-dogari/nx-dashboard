/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import * as Sentry from "@sentry/angular";
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

Sentry.init({
  dsn: "https://ba9a76c8dd5469df3c758069816db210@o4509256281096197.ingest.de.sentry.io/4509256288960592",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true
});

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

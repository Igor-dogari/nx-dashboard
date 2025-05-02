import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, isDevMode } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService implements ErrorHandler {
  handleError(error: any): void {
    if (isDevMode()) return; // ✅ Skip logging in development

    let message = 'Unknown error';
    let location = 'Unavailable';

    if (error instanceof HttpErrorResponse) {
      message = `HTTP Error ${error.status} - ${error.message}`;
      location = error.url || 'Unknown URL';
    } else if (error instanceof Error) {
      message = error.message;
      location = this.extractErrorLocation(error.stack);
    }

    console.group('🚨 PRODUCTION ERROR');
    console.error('Message:', message);
    console.error('Location:', location);
    console.groupEnd();
  }

  private extractErrorLocation(stack?: string): string {
    if (!stack) return 'No stack trace';
    const lines = stack.split('\n');
    const fileLine = lines.find(line =>
      line.includes('http') || line.includes('.ts') || line.includes('.js')
    );
    return fileLine?.trim() || 'Unknown location';
  }}

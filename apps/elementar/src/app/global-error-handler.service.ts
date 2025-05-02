import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService implements ErrorHandler {
  handleError(error: any): void {
    console.error('💥 Global Error:', error);

    // Optionally, log to server or external service
    // this.loggingService.send(error);
  }
}

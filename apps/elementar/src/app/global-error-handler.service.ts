import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService implements ErrorHandler {
  handleError(error: any): void {
    const stack = error?.stack || '';
    const componentInfo = this.guessComponentFromStack(stack);
    console.error('📍 Possibly in:', componentInfo);
  }

  private guessComponentFromStack(stack: string): string {
    const match = stack.match(/at (\w+Component)/);
    return match?.[1] || 'Unknown';
  }
}

import { CanActivateFn } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { inject } from '@angular/core';
import { of } from 'rxjs';
import { catchError, switchMap, map, retry } from 'rxjs/operators';

export const libAuthGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);

  return auth.isAuthenticated$.pipe(
    switchMap((isAuthenticated) => {
      if (isAuthenticated) {
        return of(true);
      } else {
        // Try loginWithRedirect with retry
        return auth.loginWithRedirect().pipe(
          retry(2), // 🔁 retry once if failed
          map(() => true), // ⬅️ after redirect, guard returns false
          catchError((err) => {
            console.error('❌ loginWithRedirect failed even after retry:', err);
            return of(false); // fallback if still fails
          }),
        );
      }
    }),
  );
};

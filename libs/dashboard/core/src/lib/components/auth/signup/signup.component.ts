import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';
import { HorizontalDividerComponent, LogoComponent } from '@core/components';

@Component({
  imports: [
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    RouterLink,
    ReactiveFormsModule,
    HorizontalDividerComponent,
    LogoComponent,
    NgOptimizedImage,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  public auth = inject(AuthService);

  private _formBuilder = inject(FormBuilder);

  form = this._formBuilder.group({
    name: this._formBuilder.control('', [Validators.required]),
    email: this._formBuilder.control('', [
      Validators.required,
      Validators.email,
    ]),
    password: this._formBuilder.control('', [Validators.required]),
  });
}

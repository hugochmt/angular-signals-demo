import {Component, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {form, FormField, minLength} from '@angular/forms/signals';

interface LoginData {
  email: string;
  password: string;
}

@Component({
  selector: 'app-signal-form',
  standalone: true,
  imports: [CommonModule, FormsModule, FormField],
  template: `
    <h2>Signal Form</h2>
    <form novalidate>
      <div>
        <input [formField]="loginForm.email">
      </div>
      @if (!loginForm.email().valid()) {
        @for (error of loginForm.email().errors(); track $index) {
          <p>{{ error.message }}</p>
        }
      }
      <button [disabled]="!loginForm().valid()">Valider</button>
    </form>
  `
})
export class SignalFormComponent {
  loginModel = signal<LoginData>({
    email: '',
    password: '',
  });

  loginForm = form(this.loginModel, (login) => {
    minLength(login.email, 5, {message: "Please enter minimum 5 characters"})
  });
}

import { ChangeDetectionStrategy, Component } from '@angular/core';

type LoginFormValues = { email: string, password: string };
type RegistrationFormValues = { email: string, password: string, username: string, isFarmer: boolean };

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent {
  loginMode = true;

  switchMode() {
    this.loginMode = !this.loginMode;
  }

  onLogin(formValues: LoginFormValues) {
    console.log(formValues)
  }

  onRegister(formValues: RegistrationFormValues) {
    console.log(formValues)
  }
}

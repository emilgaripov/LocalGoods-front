import { ChangeDetectionStrategy, Component } from '@angular/core';

type LoginFormValues = { email: string, password: string };
type RegistrationFormValues = { email: string, password: string, username: string, isFarmer: boolean };

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  host: {
    class: 'grow-container'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent {
  loginMode = true;
  submitted: boolean = false;

  switchMode() {
    this.loginMode = !this.loginMode;
  }

  onLogin(formValues: LoginFormValues) {
    this.submitted = true // to aviod repeated submit click
    console.log(formValues)
    this.resetForm()
  }

  onRegister(formValues: RegistrationFormValues) {
    console.log(formValues)
    this.resetForm()
  }

  resetForm(){
    this.submitted = false
  }
}

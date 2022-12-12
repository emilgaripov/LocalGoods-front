import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { RegistrationFormData } from "../../../shared/types/types";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  host: {
    class: 'grow-container'
  }
})
export class RegisterComponent implements OnInit {
  submitted = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onRegister(data: RegistrationFormData) {
    this.submitted = true;
    this.authService.createUser(data).subscribe({
      next: () => {
        this.submitted = false;
        // this.goToLogin();
      },
      error: () => {
        this.submitted = false;
      },
      complete: () => {
        this.goToLogin();
      }

    });
  }

  private goToLogin() {
    this.router.navigateByUrl('/auth/login');
  }

}

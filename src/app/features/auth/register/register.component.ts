import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';
import { RegistrationFormData } from "../../../shared/types/types";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  submitted = false;
  toBeFarmer?: boolean;
  isFarmer!: boolean

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.toBeFarmer = this.route.snapshot.queryParams['farmer']
    if (this.toBeFarmer) {
      this.isFarmer = true
    }
  }

  onRegister(data: RegistrationFormData) {
    this.submitted = true;
    this.authService.createUser(data).subscribe({
      next: () => {
        this.submitted = false;
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

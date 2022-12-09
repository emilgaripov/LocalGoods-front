import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { LoginFormData } from "../../../shared/types/types";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  host: {
    class: 'grow-container'
  }
})
export class LoginComponent implements OnInit {
  submitted = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onLogin(data: LoginFormData) {
    this.submitted = true;
    this.authService.login(data).subscribe({
      next: () => {
        this.router.navigateByUrl('/');
        this.submitted = false;
      },
      error: () => {
        this.submitted = false;
      }
    });
  }

}

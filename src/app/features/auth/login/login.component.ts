import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  host: {
    class: 'grow-container'
  },
})
export class LoginComponent implements OnInit {

  submitted = false;

  constructor(
    private authService: AuthService,
    private route: Router){}

  ngOnInit(): void {
  }

  onLogin(data: any){
    console.log(data);
    

  this.submitted = true;

    return this.authService.login(
      {
      emailAddress: data.email,
      password: data.password,
    }
    )
      .subscribe({
        next: () => {
          this.route.navigate(['/']);
          this.submitted = false;
        },
        error: () => {
          this.submitted = false;
        },
        complete: () => console.log('done'),
      })
  }

}

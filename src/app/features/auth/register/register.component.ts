import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  host: {
    class: 'grow-container'
  },
})
export class RegisterComponent implements OnInit {

  submitted = false;

  constructor(
    private authService: AuthService,
    private route: Router){}

  ngOnInit(): void {
  }

  onRegister(data: any) {
    console.log(data);    

     this.submitted = true;

    this.authService.createUser(
      {
        firstName: data.firstName,
        lastName: data.lastName,
        emailAddress: data.email,
        userName: data.username,
        password: data.password,
        isFarmer: data.isFarmer ? true : false
      }
    )
      .subscribe({
        next: () => {
          this.submitted = false;
          this.goToLogin();
        },
        error: () => {
          this.submitted = false;
        },
        complete: () => {
          console.log('done');
        }
      })
  }
  goToLogin(){
    this.route.navigate(['/auth'])
  }

}

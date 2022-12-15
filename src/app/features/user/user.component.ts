import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/shared/interfaces/user.interface';
import { UserService } from 'src/app/shared/services/user.service';
import { editUserFormData } from 'src/app/shared/types/types';
import { AuthService } from "../../shared/services/auth.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user$!: Observable<IUser | null>
  edit = false;

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.user$ = this.authService.user$;
  }

  onEditUser(data: editUserFormData) {
    this.edit = false;
    // const user = this.userService.userLocalStorage!;
    // user.email = data.emailAddress!;
    // user.userName = data.userName!;
    //
    // this.authService.user$.next(user);
    // this.authService.setUser(user);

    // this.userService.editUser(data).subscribe({
    //   next: (user) => {
    //     user.email = this.userService.userLocalStorage!.email;
    //     this.authService.user$.next(user);
    //     this.authService.setUser(user);
    //   }
    // })
  }
}

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { first, Observable } from 'rxjs';
import { IUser } from 'src/app/shared/interfaces/user.interface';
import { UserService } from 'src/app/shared/services/user.service';
import { editUserFormData } from 'src/app/shared/types/types';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  host: {
    class: 'grow-container'
  },
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class UserComponent implements OnInit {

  user$!: Observable<IUser>
  edit=false;

  constructor(
    public userService: UserService
  ) { }

  ngOnInit(): void {
    this.user$ = this.userService.getUserById()
    .pipe(first())
    // .subscribe((user) => this.user = user)
  }

  oneditUser(data: editUserFormData){
    console.log(data);
    
    this.userService.editUser(data)

  }
}

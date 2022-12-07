import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces/user.interface';

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

  user!: IUser;

  constructor() { }

  ngOnInit(): void {
    
  }

}

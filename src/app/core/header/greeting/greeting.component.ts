import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces/user.interface';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GreetingComponent {
  @Input() user!: IUser | null;
}

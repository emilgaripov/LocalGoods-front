import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { WhoAuth } from "../../../shared/types/types";

@Component({
  selector: 'app-auth-user',
  templateUrl: './auth-user.component.html',
  styleUrls: ['./auth-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthUserComponent {
  @Output() switchTo = new EventEmitter<WhoAuth>();

  goToFarmer() {
    this.switchTo.emit('farmer');
  }
}

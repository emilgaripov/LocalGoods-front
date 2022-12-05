import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { WhoAuth } from "../../../shared/types/types";

@Component({
  selector: 'app-auth-farmer',
  templateUrl: './auth-farmer.component.html',
  styleUrls: ['./auth-farmer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthFarmerComponent {
  @Output() switchTo = new EventEmitter<WhoAuth>();

  goToUser() {
    this.switchTo.emit('user');
  }
}

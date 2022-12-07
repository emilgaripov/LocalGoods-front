import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-farmer',
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.scss'],
  host: {
    class: 'grow-container'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FarmerComponent {

}

import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { animate, style, transition, trigger } from "@angular/animations";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('modalAppear', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(300)
      ])
    ])
  ]
})
export class ModalComponent {
  @Output() isModalOpened = new EventEmitter<boolean>();

  closeModal() {
    this.isModalOpened.emit(false);
  }
}

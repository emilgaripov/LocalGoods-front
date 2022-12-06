import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Output,
  Renderer2,
  ViewChild
} from '@angular/core';
import { Categories, categories } from 'src/app/shared/types/types';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent {
  @ViewChild('toggleButton') toggleButton!: ElementRef;
  @ViewChild('navmenu') menu!: ElementRef;

  @Output() isNav = new EventEmitter<boolean>()

  categories: Categories[] = categories
  nav = false;

  constructor(private renderer: Renderer2) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (!this.nav) return
      if (e.target !== this.toggleButton.nativeElement && !this.menu.nativeElement.contains(e.target)) {
        this.nav = false;
        this.isNav.emit(this.nav)
      }
    });
  }

  toggleMenu(event: Event) {
    event.stopImmediatePropagation();
    this.nav = !this.nav
    this.isNav.emit(this.nav)
  }
}

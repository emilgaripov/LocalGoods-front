import { Component, ElementRef, EventEmitter, OnInit, Output, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  @ViewChild('toggleButton') toggleButton!: ElementRef;
  @ViewChild('nav') menu!: ElementRef;

  @Output() isNav = new EventEmitter<boolean>()

  nav = false;

  constructor(
    private renderer: Renderer2
  ) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (!this.nav) return
      if (e.target !== this.toggleButton.nativeElement && !this.menu.nativeElement.contains(e.target)) {
        this.nav = false;
      }
    });
  }
  toggleMenu(event: Event) {
    event.stopImmediatePropagation();
    this.nav = !this.nav
    this.isNav.emit(this.nav)
  }
}

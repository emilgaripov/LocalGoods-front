import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NavigationStart, Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('toggleButton') toggleButton!: ElementRef;
  @ViewChild('nav') menu!: ElementRef

  currentPage!: string;
  term = '';
  nav = false;

  constructor(
    private router: Router,
    private renderer: Renderer2
  ) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (!this.nav) return
      if (e.target !== this.toggleButton.nativeElement && !this.menu.nativeElement.contains(e.target)) {
        this.nav = false;
      }
    });
  }

  ngOnInit(): void {
    this.router.events.subscribe({
      next: (event) => {
        if (event instanceof NavigationStart) {
          this.currentPage = event.url;
        }
      }
    });

  }

  toggleMenu(event: Event) {
    event.stopImmediatePropagation();
    this.nav = !this.nav
  }

}

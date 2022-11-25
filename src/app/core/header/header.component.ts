import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentPage!: string;
  term = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe({
      next: (event) => {
        if (event instanceof NavigationStart) {
          this.currentPage = event.url;
        }
      }
    });
  }

}

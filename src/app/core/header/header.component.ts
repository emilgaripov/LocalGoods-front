import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() navOpen?: boolean

  currentPage!: string;

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.router.events.subscribe({
      next: (event) => {
        if (event instanceof NavigationEnd) {
          this.currentPage = event.url.split('/')[1];
        }
      }
    });

  }

  setIsNav(event:any){
    this.navOpen = event
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from "@angular/router";
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { IUser } from 'src/app/shared/interfaces/user.interface';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() navOpen?: boolean
  currentPage!: string;
  user$!: Observable<IUser | null>;

  constructor(
    private router: Router,
    private userService: UserService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.user$ = this.authService.user$;
    this.router.events.subscribe({
      next: (event) => {
        if (event instanceof NavigationEnd) {
          this.currentPage = event.url.split('/')[1];
        }
      }
    });
  }

  setIsNav(event: any) {
    this.navOpen = event
  }
}

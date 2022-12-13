import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from "@angular/router";
import { first, Observable } from 'rxjs';
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
  isUser$!: Observable<IUser | null>;
  user!: IUser

  constructor(
    private router: Router,
    private userService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.router.events.subscribe({
      next: (event) => {
        if (event instanceof NavigationEnd) {
          this.currentPage = event.url.split('/')[1];
        }
      }
    });
    this.isUser$ = this.authService.user$;

    this.isUser$.subscribe((u) => {
      if (u) {
        this.userService.getUserById()
          .pipe(first())
          .subscribe((user) => this.user = user)
      }
    })
  }

  setIsNav(event: any) {
    this.navOpen = event
  }
}

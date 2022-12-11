import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthFarmerGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.authService.token) {
      return this.router.createUrlTree(['/auth/login']);
    }

    return this.authService.user$.pipe(
      take(1),
      map((user) => {
        const isAuthenticated = !!user;
        const isFarmer = user?.roles.includes('Farmer');

        if (isAuthenticated && isFarmer) return true;

        return this.router.createUrlTree(['/auth/login']);
      })
    );
  }

}

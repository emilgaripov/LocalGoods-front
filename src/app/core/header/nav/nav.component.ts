import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter, OnInit,
  Output,
  Renderer2,
  ViewChild
} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/features/auth/auth.service';
import { ICategory } from "../../../shared/interfaces/category.interface";
import { CategoriesService } from "../../../shared/services/categories.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class NavComponent implements OnInit {
  @ViewChild('toggleButton') toggleButton!: ElementRef;
  @ViewChild('navmenu') menu!: ElementRef;

  @Output() isNav = new EventEmitter<boolean>()

  categories$!: Observable<ICategory[]>;

  nav = false;

  isUser = false;

  constructor(
    private renderer: Renderer2,
    private route: Router,
    private categoriesService: CategoriesService,
    private authService: AuthService
  ) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (!this.nav) return
      if (e.target !== this.toggleButton.nativeElement && !this.menu.nativeElement.contains(e.target)) {
        this.nav = false;
        this.isNav.emit(this.nav)
      }
    });

    this.isUser = this.authService.isAuthenticated()

  }

  ngOnInit(): void {
    this.categories$ = this.categoriesService.getHomeCategories();
  }

  toggleMenu(event?: Event) {
    event?.stopImmediatePropagation();
    this.nav = !this.nav
    this.isNav.emit(this.nav)
  }

  signOut(){
    localStorage.clear()
    this.route.navigate(['/'])

    if(window.innerWidth < 1024){
      this.toggleMenu()
    }
  }

  viewAccount(){
    this.route.navigate(['user', 1])
  }
}

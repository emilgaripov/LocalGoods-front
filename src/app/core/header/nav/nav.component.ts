import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter, OnInit,
  Output,
  Renderer2,
  ViewChild
} from '@angular/core';
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

  categories: ICategory[] = [];
  nav = false;

  constructor(
    private renderer: Renderer2,
    private categoriesService: CategoriesService
  ) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (!this.nav) return
      if (e.target !== this.toggleButton.nativeElement && !this.menu.nativeElement.contains(e.target)) {
        this.nav = false;
        this.isNav.emit(this.nav)
      }
    });
  }

  ngOnInit(): void {
    this.categories = this.categoriesService.categories;
  }

  toggleMenu(event: Event) {
    event.stopImmediatePropagation();
    this.nav = !this.nav
    this.isNav.emit(this.nav)
  }
}

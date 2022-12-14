import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CategoriesService } from "../../../shared/services/categories.service";
import { ICategory } from "../../../shared/interfaces/category.interface";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCategoriesComponent implements OnInit {
  categories$!: Observable<ICategory[]>;

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.categories$ = this.categoriesService.getHomeCategories();
  }
}

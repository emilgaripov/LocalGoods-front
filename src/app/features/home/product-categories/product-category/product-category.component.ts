import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ProductCategoryComponent{

  @Input() category!: string

}

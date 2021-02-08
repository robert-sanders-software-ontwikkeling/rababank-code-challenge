import { Component, Input, TemplateRef } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "src/app/models/product";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: 'rb-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent {
  public readonly products$: Observable<Product[]>

  constructor(productService: ProductService) {
    this.products$ = productService.getProducts();
  }
}
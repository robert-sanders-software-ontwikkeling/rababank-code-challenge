import { Component, Input } from "@angular/core";
import { Product } from "src/app/models/product";

@Component({
  selector: 'rb-product',
  templateUrl: './product.component.html'
})
export class ProductComponent {
  @Input() product: Product;
}
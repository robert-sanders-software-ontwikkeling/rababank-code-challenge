import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../models/product";

import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private readonly http: HttpClient) {
  }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('assets/data/products.json');
  }
}
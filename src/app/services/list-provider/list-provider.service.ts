import { Injectable, OnInit } from '@angular/core';
import { ProductCrudService } from '../product-crud/product-crud.service';
import { Product } from '../../components/form-component/form-component.component';

@Injectable()
export class ListProviderService implements OnInit {

  constructor(private productCrudService: ProductCrudService) { }

  ngOnInit(): void {
  }

  provideBoughtList(): Product[] {
    return this.productCrudService.getInventory().filter((product) => {
      return (product.purchased);
    })
  }

  provideAvailableList(): Product[] {
    return this.productCrudService.getInventory().filter((product) => {
      return (!product.purchased);
    })
  }

  provideAll(): Product[] {
    return this.productCrudService.getInventory();
  }

  getTotal(products: Product[]): number {
    let total: number = 0;
    for (let product of products) {
      total = total + (product.quantity * product.price);
    }
    return total;
  }
}

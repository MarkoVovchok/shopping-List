import { Injectable } from '@angular/core';
import { Product } from '../../components/form-component/form-component.component';
import { LocalStorageService } from '../local-storage/local-storage.service';

const PRODUCTS_STORAGE_KEY = 'products';

@Injectable()
export class ProductCrudService {

  inventory:Product[];

  constructor(private localStorageService: LocalStorageService) {
    this.loadInventoryFromLocal();
  }

  loadInventoryFromLocal() {
    this.inventory = this.localStorageService.load<Product[]>(PRODUCTS_STORAGE_KEY) || [];
  }

  addItemToInventory(item: Product): void {
    this.inventory.push(item);
    this.localStorageService.save(PRODUCTS_STORAGE_KEY, this.inventory);
  }

  updateInventory(item: Product) {
    this.deleteItemFromInventory(item);
    this.addItemToInventory(item);
  }

  deleteItemFromInventory(item: Product): void {
    this.inventory.splice(this.inventory.indexOf(item), 1);
    this.localStorageService.save(PRODUCTS_STORAGE_KEY, this.inventory);
  }

  getInventory(): Product[] {
    return this.inventory;
  }
}

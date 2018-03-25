import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductCrudService } from '../../services/product-crud/product-crud.service';

export interface Product {
  productName: string;
  price: number;
  quantity: number;
  editable: boolean;
  purchased: boolean;
}

@Component({
  selector: 'form-component',
  templateUrl: './form-component.component.html'

})
export class FormComponentComponent implements OnInit {
  product: Product;
  @Output() newProductAdded: EventEmitter<void> = new EventEmitter();
  @ViewChild('productForm') newProductForm: NgForm;

  constructor(private productCrudService: ProductCrudService) { }

  ngOnInit() {
    this.product = { productName: '', price: undefined, quantity: undefined, editable: false, purchased: false };
  }

  addProduct() {
    this.productCrudService.addItemToInventory(this.product);
    this.newProductAdded.emit();
    this.product = { productName: '', price: undefined, quantity: undefined, editable: false, purchased: false };
    this.newProductForm.reset();
  }
}

import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '../form-component/form-component.component';
import { ProductCrudService } from '../../services/product-crud/product-crud.service';


@Component({
  selector: '[table-data]',
  templateUrl: './table-data.component.html'
})
export class TableDataComponent implements OnInit {

  @Input() product: Product;
  @Output() productChanged: EventEmitter<void> = new EventEmitter();


  constructor(private productCrudService: ProductCrudService) { }

  ngOnInit() {
  }

  notifyAboutChange() {
    this.productChanged.emit();
  }

  editThisItem() {
    this.product.editable = true;
  }

  updateThisItem() {
    this.product.editable = false;
    this.productCrudService.updateInventory(this.product);
    this.notifyAboutChange();
  }

  deleteThisItem() {
    this.productCrudService.deleteItemFromInventory(this.product);
    this.notifyAboutChange();
  }

  buyProduct() {
    this.product.purchased = !this.product.purchased;
    this.updateThisItem();
  }
}

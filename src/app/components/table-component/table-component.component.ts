import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '../form-component/form-component.component';
import { ListProviderService } from '../../services/list-provider/list-provider.service';

@Component({
  selector: 'table-component',
  templateUrl: './table-component.component.html'
})

export class TableComponentComponent implements OnInit {


  @Input() total: number;
  @Input() listToShow: Product[];
  @Output() itemChanged: EventEmitter<void> = new EventEmitter();


  constructor() {
  }

  ngOnInit() {
  }

  passChangedMessage() {
    this.itemChanged.emit();
  }

}

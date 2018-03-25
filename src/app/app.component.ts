import { Component, Output, Input, OnInit } from '@angular/core';
import { Product } from './components/form-component/form-component.component';
import { ListProviderService } from './services/list-provider/list-provider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

  @Output() total: number;
  @Output() listToShow: Product[];
  searchText: string;

  constructor(private listProviderService: ListProviderService) {
  }

  ngOnInit(): void {
    this.listToShow = this.listProviderService.provideAll();
    this.getTotal();
  }

  showPurchasedList(): void {
    this.listToShow = this.listProviderService.provideBoughtList();
    this.getTotal();
  }

  showAllProducts() {
    this.listToShow = this.listProviderService.provideAll();
    this.getTotal();
  }

  showNotBought() {
    this.listToShow = this.listProviderService.provideAvailableList();
    this.getTotal();
  }

  filterByName() {
    let filteredlistToShow = this.listToShow.filter((product) => {
      return product.productName.toLowerCase().trim().match(this.searchText);
    })

    if (filteredlistToShow) {
      this.listToShow = filteredlistToShow;
    }

    if (!this.searchText) {
      this.listToShow = this.listProviderService.provideAll();
    }

    this.getTotal();
  }

  cleanFilter() {
    this.searchText = "";
    this.filterByName();
  }

  getTotal() {
    this.total = this.listProviderService.getTotal(this.listToShow);
  }

}

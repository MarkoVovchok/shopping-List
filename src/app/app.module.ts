import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponentComponent } from './components/form-component/form-component.component';
import { TableComponentComponent } from './components/table-component/table-component.component';
import { TableDataComponent } from './components/table-data/table-data.component';
import { NameForbiddenDirective } from './directives/name-forbidden.directive';
import { LocalStorageService } from './services/local-storage/local-storage.service';
import { ProductCrudService } from './services/product-crud/product-crud.service';
import { ListProviderService } from './services/list-provider/list-provider.service';


@NgModule({
  declarations: [
    AppComponent,
    FormComponentComponent,
    TableComponentComponent,
    TableDataComponent,
    NameForbiddenDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [LocalStorageService,ProductCrudService,ListProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }

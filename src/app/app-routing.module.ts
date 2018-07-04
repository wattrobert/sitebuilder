import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebsitesComponent } from './websites/websites.component';
import { CompaniesComponent } from './companies/companies.component';
import { ProductsComponent } from './products/products.component';
import { SbComponentsComponent } from './sb-components/sb-components.component';

const routes: Routes = [
  { path: 'websites', component: WebsitesComponent },
  { path: 'companies', component: CompaniesComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'components', component: SbComponentsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }

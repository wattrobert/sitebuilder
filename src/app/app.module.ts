import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule, MatCheckboxModule, MatExpansionModule, MatStepperModule, MatButtonModule, MatIconModule, MatToolbarModule, MatSidenavModule, MatListModule, MatTableModule } from '@angular/material';
import { PopoverModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxEditorModule } from 'ngx-editor';
import { AppComponent } from './app.component';
import { SbComponentFormComponent } from './sb-component-form/sb-component-form.component';
import { SbHtmlInputComponent } from './sb-html-input/sb-html-input.component';
import { SbCompanyFormComponent } from './sb-company-form/sb-company-form.component';
import { AppRoutingModule } from './app-routing.module';
import { WebsitesComponent } from './websites/websites.component';
import { CompaniesComponent } from './companies/companies.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { CurrencyPipe } from '@angular/common';
import { SbComponentsComponent } from './sb-components/sb-components.component';
@NgModule({
  declarations: [
    AppComponent,
    SbComponentFormComponent,
    SbHtmlInputComponent,
    SbCompanyFormComponent,
    DashboardComponent,
    WebsitesComponent,
    CompaniesComponent,
    ProductsComponent,
    SbComponentsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    PopoverModule,
    BrowserAnimationsModule,
    MatListModule,
    MatTableModule,
    MatSidenavModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatStepperModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxEditorModule,
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

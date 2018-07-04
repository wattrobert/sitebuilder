import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'sb-company-form',
  templateUrl: './sb-company-form.component.html',
  styleUrls: ['./sb-company-form.component.scss']
})
export class SbCompanyFormComponent implements OnInit {
  siteFormGroup: FormGroup;
  companyFormGroup: FormGroup;
  productFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.siteFormGroup = this._formBuilder.group({
      domainName: ['', Validators.required],
      autoRenew: ['', Validators.required]
    })
    this.companyFormGroup = this._formBuilder.group({
      companyName: ['', Validators.required]
    });
    this.productFormGroup = this._formBuilder.group({
      productName: ['', Validators.required]
    });
  }
}

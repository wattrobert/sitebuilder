import { Component, OnInit, Input } from '@angular/core';
import { SbFormFieldTypes, SbComponent } from '../models/component.model';

@Component({
  selector: 'sb-component-form',
  templateUrl: './sb-component-form.component.html',
  styleUrls: ['./sb-component-form.component.scss']
})
export class SbComponentFormComponent implements OnInit {
  @Input() private type: SbComponent;
  private fieldTypes = SbFormFieldTypes;

  constructor() { 

  }

  ngOnInit() {
  }


}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {
  sampleData: any;
  displayedColumns: string[];

  constructor() { }

  ngOnInit() {
    this.displayedColumns = ['name', 'terms', 'description']
    this.sampleData = [
      {name:'Test Company A', terms:false, description:'Test description for Test Company A'},
      {name:'Test Company B', terms:true, description:'Test description for Test Company B'},
      {name:'Test Company C', terms:true, description:'Test description for Test Company C'},
    ]
  }

}

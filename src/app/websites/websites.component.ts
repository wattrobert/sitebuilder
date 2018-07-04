import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';

export interface WebsiteElement {
  domain: string;
  company: string;
  autoRenew: boolean;
  security: string;
}

@Component({
  selector: 'websites',
  templateUrl: './websites.component.html',
  styleUrls: ['./websites.component.scss']
})
export class WebsitesComponent implements OnInit {
  sampleData: Array<WebsiteElement>;
  displayedColumns: string[];
  selection = new SelectionModel<WebsiteElement>(true, []);

  constructor() { }

  ngOnInit() {
    this.displayedColumns = ['select', 'domain', 'company', 'autoRenew', 'security', 'actions']
    this.sampleData = [
      {domain:'www.test1.com', company:'Test Company A', autoRenew:false, security:'Medium'},
      {domain:'www.test2.com', company:'Test Company B', autoRenew:true, security:'Medium'},
      {domain:'www.test3.com', company:'Test Company B', autoRenew:true, security:'High'},
      {domain:'www.test4.com', company:'Test Company C', autoRenew:false, security:'Low'},
    ]
  }

  
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.sampleData.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.sampleData.forEach(row => this.selection.select(row));
  }

}

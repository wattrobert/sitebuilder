import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  sampleData: any;
  displayedColumns: string[];

  constructor() { }

  ngOnInit() {
    this.displayedColumns = ['name', 'price', 'description']
    this.sampleData = [
      {image: 'www.imageurl.com', name:'Test Product 1', price:10, description:'Test product 1 public description'},
      {image: 'www.imageurl.com', name:'Test Product 2', price:12, description:'Test product 2 public description'},
      {image: 'www.imageurl.com', name:'Test Product 3', price:20, description:'Test product 3 public description'},
      {image: 'www.imageurl.com', name:'Test Product 4', price:15, description:'Test product 4 public description'},
      {image: 'www.imageurl.com', name:'Test Product 5', price:30, description:'Test product 5 public description'},
    ]
  }
}

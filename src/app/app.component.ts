import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from './shared/models/products';
import { Pagination } from './shared/models/pagination';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'E-Commerce';
  products : Product[] = [];

  constructor(private http : HttpClient){}
  
  ngOnInit(): void {
    this.http.get<Pagination<Product[]>>("https://localhost:7079/api/products?PageSize=50").subscribe({
      next: response => this.products = response.data,
      error: error =>  console.log(error),
      complete: () => {
        console.log("Request Completed");
        console.log("Extra Information Goes Here");
      }
    });
  }
;


}

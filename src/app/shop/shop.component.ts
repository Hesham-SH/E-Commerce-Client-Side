import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../shared/models/products';
import { ShopService } from './shop.service';
import { Brand } from '../shared/models/brand';
import { Type } from '../shared/models/type';
import { ShopParams } from '../shared/models/shopParams';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit{
  products : Product[] = [];
  brands : Brand[] = [];
  types : Type[] = [];
  shopParams = new ShopParams();
  sortOptions = [
    {name: 'Alphabetical', value: 'name'}, 
    {name: 'Price: Low to High', value: 'priceAscending'}, 
    {name: 'Price: High to Low', value: 'priceDescending'}
  ];

  totalCount: number = 0;
  @Input() value?: number;

  constructor(private shopService : ShopService) { }
  
  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getTypes();
  }

  getProducts(){
    this.shopService.getProducts(this.shopParams).subscribe({
      next: response => {
        this.products = response.data;
        this.shopParams.pageNumber = response.pageIndex;
        this.shopParams.pageSize = response.pageSize;
        this.totalCount = response.count;
      },
      error : error => console.log(error) 
    })
  }

  getBrands(){
    this.shopService.getBrands().subscribe({
      next: response => this.brands = [{id: 0, name:'All'}, ...response],
      error : error => console.log(error) 
    })
  }

  getTypes(){
    this.shopService.getTypes().subscribe({
      next: response => this.types = [{id: 0, name:'All'}, ...response],
      error : error => console.log(error) 
    })
  }

  onBrandSelected(brandId : number){
    this.shopParams.brandId = brandId;
    this.getProducts();
  }

  onTypeSelected(typeId : number){
    this.shopParams.typeId = typeId;
    this.getProducts();
  }

  onSortSelected(event: any){
    this.shopParams.sort = event.target.value;
    this.getProducts();
  }

  onPageChanged(event: any){
    if(this.shopParams.pageNumber !== event){
      console.log(event.page);
      this.shopParams.pageNumber = event;
      this.getProducts();
    }
  }

}

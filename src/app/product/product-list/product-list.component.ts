import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products!:Product[];

  filteredProducts!:Product[];

  constructor(private ps:ProductService){
    // this.products = this.ps.products
    // this.filteredProducts = this.products
  }

  errorMessage= null;

  ngOnInit(): void {
    this.ps.getAllProducts().subscribe({
      next:data => {
        this.products = data;
        this.filteredProducts = this.products;
      },
      error: err=> this.errorMessage = err
    });
    
  }



  searchText=''

  private _filterBy ='';

  set filterBy(input: string){
    this._filterBy = input;
    this.filterProducts(this._filterBy)
  }

  get filterBy(): string{
    return this._filterBy;
  }


  filterProducts(filterText:string){
    this.filteredProducts= this.products.filter(x => x.name.toLowerCase().includes(filterText.toLowerCase()))
  }

  addToCart(){
    this.ps.increment();
  }
}

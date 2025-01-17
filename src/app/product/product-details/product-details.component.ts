import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs';
import { Product } from '../product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  constructor(private route: ActivatedRoute,
              private ps: ProductService,
              private router:Router
  ){}

  id!:number;
  product$!:Observable<Product>;

  ngOnInit(): void {
      this.route.params.subscribe(data => this.id = data['id']);
      // this.ps.getProductById(this.id).subscribe(data => console.log(data));
      this.product$ = this.ps.getProductById(this.id)
  }

  goBack(){
    this.router.navigate(['/products']);
  }

  delete(id:number){
    this.ps.deleteProduct(id)
           .subscribe(data => this.router.navigate(['/products']));
  }
}

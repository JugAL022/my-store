import { Injectable } from '@angular/core';
import { Product } from './product';
import { BehaviorSubject, Observable, Subject, catchError, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  apiUrl="http://localhost:3000"

  cartCountCommon: number = 0;

  cartCount$ = new BehaviorSubject<number>(0);
  
  increment(){
    this.cartCountCommon++;
    //++ operator is to increment value of variable by one.
    this.cartCount$.next(this.cartCountCommon);
  }

  getAllProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.apiUrl}/products`)
                    .pipe(catchError((error: HttpErrorResponse) => {
                      return throwError("Error occured while fectching data");
                    }));
  }

  //get method for retreving single product
  getProductById(id:number):Observable<Product>{
    return this.http.get<Product>(`${this.apiUrl}/products/${id}`);
  }

  //exrta setting for specifying that we are sending the jason data in the request
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type':'application/json'
    })
  }

  //create new product in the backend
  insertProduct(product:Product):Observable<Product>{
    return this.http.post<Product>(`${this.apiUrl}/products`, 
                                    JSON.stringify(product),
                                    this.httpOptions)
  }

  //delete the product based on the id passed
  deleteProduct(id:number):Observable<Product>{
    return this.http.delete<Product>(`${this.apiUrl}/products/${id}`);
  }

  //update the product based on the id and data submitted
  updateProduct(id:number,product:Product):Observable<Product>{
    return this.http.put<Product>(`${this.apiUrl}/products/${id}`,
                                  JSON.stringify(product),
                                  this.httpOptions)
  }
}

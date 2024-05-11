import { NgModule } from "@angular/core";
import { ProductListComponent } from "./product-list/product-list.component";
import { AddProductComponent } from "./add-product/add-product.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ReviewComponent } from "./review/review.component";
import { OrderComponent } from "./order/order.component";
import { UpdateProductComponent } from "./update-product/update-product.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {path: "", component: ProductListComponent, title:"MyStore | Products"},
    {path:"add", component:AddProductComponent, title:"MyStore | Add Product"},
    {path: ":id", component: ProductDetailsComponent, title:"MyStore | Details",
      // canActivate:[verifyIdGuardGuard],
      children:[
        {path:"review",component:ReviewComponent,title:"MyStore | Review"},
        {path:"order",component:OrderComponent,title:"MyStore | Order"}
      ]
    },
    {path: ":id/edit", component: UpdateProductComponent, title:"MyStore | Update Product"},
  ]

@NgModule({
    imports:[
    //forChild in featured module
    RouterModule.forChild(routes),
    ]
})

export class ProductRoutingModule{}
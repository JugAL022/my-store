export interface Product {
    id:number;
    name:string;
    price:number;
    image:string;
    description?:string;  //we are making decscription optional by adding ?
}

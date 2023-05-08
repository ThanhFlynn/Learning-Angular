import { Injectable } from '@angular/core';
import { Products } from './products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Products[] = [];

  constructor(
    private http: HttpClient
  ){}

  artToCart(product: Products){
    this.items.push(product);
  }

  getItems(){
    return this.items;
  }

  clearCart(){
    this.items = [];
    return this.items;
  }

  getShippingPrices(){
    return this.http.get<{type:string, price: number}[]>('/assets/shipping.json');
  }
}

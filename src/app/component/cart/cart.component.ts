import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number;
  public keys: any
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.getCart()
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
    localStorage.removeItem(String(item.id))
    this.getCart()
    confirm("Are you sure")
  }

  emptycart(){
    this.cartService.removeAllCart();
    localStorage.clear()
    this.getCart()
    confirm("Are you sure Saved Items may lost ")
  }

  getCart() {
    this.products = []
    this.grandTotal = 0
    this.keys = Object.keys(localStorage)
    let length = this.keys.length
    while(length --) {
      this.products.push(JSON.parse(localStorage.getItem(this.keys[length])))
    }
    this.products.map((a:any)=>{
      this.grandTotal += a.total;
    })
  }

  incrementQuantity(item: any) {
    item.quantity++
    item.total = item.price*item.quantity
    localStorage.setItem(item.id, JSON.stringify(item))
    this.getCart()
  }

  decrementQuantity(item: any) {
    if(item.quantity == 1) {
      localStorage.removeItem(String(item.id))
      this.getCart()
    } else {
      item.quantity--
      item.total = item.price*item.quantity
      localStorage.setItem(item.id, JSON.stringify(item))
      this.getCart()
    }
  }

}
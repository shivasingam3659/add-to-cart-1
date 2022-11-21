import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';




@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
 
})
export class CartComponent implements OnInit {

  // payment code
  

  public products : any = [];
  public grandTotal !: number;
  ngFormRef: any;
  price: any;
  total: any;
  cartItems: any;
  totalAmount: number | undefined;
  constructor(private cartService : CartService) {
    
   }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();

    })
  }
  removeItem(item: any){
    confirm("Are you sure")
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    confirm("Are you sure")
    this.cartService.removeAllCart();
  }
  
 // increment quantity
 incrementQuantity(item:any){
  item.quantity++; 
  item.total++;
 }

//  decrement quantity
 decrementQuantity(item:any){
  item.quantity--;
  item.total--;
  if(item.quantity == 0){
    this.cartService.removeCartItem(item);
  }


 }


}

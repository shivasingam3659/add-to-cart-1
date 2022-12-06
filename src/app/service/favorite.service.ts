import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
 
  price: any;
  count: any;
  forEach(arg0: () => void) {
    throw new Error('Method not implemented.');
  }

  public favorItemList : any =[]
  public adminList : any =[]
  public productList2 = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  constructor() { }
  getProducts(){
    return this.productList2.asObservable();
  }

  setProduct(product : any){
    this.favorItemList.push(...product);
    this.productList2.next(product);
  }
  setAdmin(product : any){
    
  }
  
  addtoFavourt(product : any){
    this.favorItemList.push(product);
    this.productList2.next(this.favorItemList);
    this.getTotalPrice();
    console.log(this.favorItemList)
  }

  

  getTotalPrice() : number{
    let grandTotal = 0;
    this.favorItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }
  removeCartItem(product: any){
    this.favorItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.favorItemList.splice(index,1);
      }
    })
    this.productList2.next(this.favorItemList);
  }
  removeAllCart(){
    this.favorItemList = []
    this.productList2.next(this.favorItemList);
  }
}


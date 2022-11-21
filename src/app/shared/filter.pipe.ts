import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value : any[], filterString: string, propName:string): any[] {
    const result:any =[];
    if(!value || filterString==='' || propName ===''){
      return value;
    }
    value.forEach((a:any)=>{
      if(a[propName].trim().toLowerCase().includes(filterString.toLowerCase())){
        result.push(a);
      }
    });
    return result;
  }

}

// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';
// import { Pipe, PipeTransform } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {
//   price: any;
//   count: any;
//   forEach(arg0: () => void) {
//     throw new Error('Method not implemented.');
//   }

//   public cartItemList : any =[]
//   public productList = new BehaviorSubject<any>([]);
//   public search = new BehaviorSubject<string>("");

//   constructor() { }
//   getProducts(){
//     return this.productList.asObservable();
//   }

//   setProduct(product : any){
//     this.cartItemList.push(...product);
//     this.productList.next(product);
//   }
//   addtoCart(product : any){
//     this.cartItemList.push(product);
//     this.productList.next(this.cartItemList);
//     this.getTotalPrice();
//     console.log(this.cartItemList)
//   }
//   getTotalPrice() : number{
//     let grandTotal = 0;
//     this.cartItemList.map((a:any)=>{
//       grandTotal += a.total;
//     })
//     return grandTotal;
//   }
//   removeCartItem(product: any){
//     this.cartItemList.map((a:any, index:any)=>{
//       if(product.id=== a.id){
//         this.cartItemList.splice(index,1);
//       }
//     })
//     this.productList.next(this.cartItemList);
//   }
//   removeAllCart(){
//     this.cartItemList = []
//     this.productList.next(this.cartItemList);
//   }
// }

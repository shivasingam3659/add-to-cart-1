import { Component, OnInit, } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';
import { FavoriteService } from 'src/app/service/favorite.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  
  public productList : any ;
  public productList2 : any ;
  public filterCategory : any; 
  searchKey:string ="";
  constructor(private api : ApiService, private cartService : CartService, private  favoriteService :  FavoriteService) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((a:any) => {
        if(a.category ==="women's clothing" || a.category ==="men's clothing"){
          a.category ="fashion"
        }
        Object.assign(a,{quantity:1,total:a.price});
      });
      console.log(this.productList)
    });

    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
    this.favoriteService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }




  
  addtocart(item: any){
    localStorage.setItem(item.id, JSON.stringify(item))
    this.cartService.addtoCart(item);
    if(item.rating.count==0){
     alert("Stock OVER!!!  Veredhi konnukko")
    }else{
      item.rating.count--;
    }
  }

  addtoFavourt(item: any){
    localStorage.setItem(item.id, JSON.stringify(item))
    this.favoriteService.addtoFavourt(item);
  }


  // addtocart(item: any){
  //   localStorage.setItem(item.id, JSON.stringify(item))
  //   this.cartService.addtoCart(item);
  //   if(item.rating.count==0){
  //    this.msg= "stock over"
  //   }else{
  //     item.rating.count--;
  //   }
  // }


  filter(category:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }

}

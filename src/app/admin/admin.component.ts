import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  
  public productList: any;
  public filterCategory: any
  searchKey: string = "";
  public searchTerm !: string;
  item: any;
  quantity: any;
  items: any;
  products: any[];
  grandTotal: number;
  keys: string[];
  constructor(private api: ApiService, private cartService: CartService) { }

  ngOnInit(): void {
    this.api.getProduct()
      .subscribe(res => {
        this.productList = res;
        this.filterCategory = res;
        this.productList.forEach((a: any) => {
          if (a.category === "women's clothing" || a.category === "men's clothing") {
            a.category = "fashion"
          }
          Object.assign(a, { quantity: 1, total: a.price });
        });
        console.log(this.productList)
      });

    this.cartService.search.subscribe((val: any) => {
      this.searchKey = val;
    })
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


 

  filter(category: string) {
    this.filterCategory = this.productList
      .filter((a: any) => {
        if (a.category == category || category == '') {
          return a;
        }
      })
  }
  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }


  addQuantity() {
    //prompt("Checking the control!");
    this.item.push({
      quantity: this.quantity
    });
  }
  // deleteRow(x){
  //   var delBtn = confirm(" Do you want to delete ?");
  //   if ( delBtn == true ) {
  //     this.items.splice(x, 1 );
  //   }   
  // } 


  addToLocal(item:any){
    localStorage.setItem(item.id, JSON.stringify(item.rating.count))
    var countable = (localStorage.getItem(item.id))
    this.getCart()
    console.log(countable)
  }

  // addToLocal(item:any){
  //   localStorage.setItem(item.id, JSON.stringify(item.rating.count))
  //   var countable = (localStorage.getItem(item.id))
  //   this.getCart()
  //   console.log(countable)
  // }


  saveFromLocal(item:any){
    localStorage.getItem(item.id)
  }
}

import { Component, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 
  showNav = false;
  toDisplay = true;
  toggleData() {
    this.toDisplay = !this.toDisplay;
  }
  sidenavOption: any;
  isshow:boolean=true;
  repoService: any;
  menu_hide_show(){
  this.isshow = !this.isshow;
  }

  public totalItem : number = 0;
  public searchTerm !: string;
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }
}


// import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import { Router } from '@angular/router';
// import { CartService } from 'src/app/service/cart.service';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.scss'],
// })
// export class HeaderComponent implements OnInit {
//   @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  

//   constructor(private router: Router) {}

//   ngOnInit(): void {}

//   toggleSidebar() {
//     this.toggleSidebarForMe.emit();
//   }
// }












// // import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// // import { CartService } from 'src/app/service/cart.service';



// // @Component({
// //   selector: 'app-header',
// //   templateUrl: './header.component.html',
// //   styleUrls: ['./header.component.scss']
// // })
// // export class HeaderComponent implements OnInit {
// //   @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
 
  
// //   toDisplay = true;
// //   toggleSidebar() {
// //     this.toggleSidebarForMe.emit();
// //   }
  
// //   toggleData() {
// //     this.toDisplay = !this.toDisplay;
// //   }
// //   sidenavOption: any;
// //   isshow:boolean=true;
// //   repoService: any;
// //   menu_hide_show(){
// //   this.isshow = !this.isshow;
// //   }

// //   public totalItem : number = 0;
// //   public searchTerm !: string;
// //   constructor(private cartService : CartService) { }

// //   ngOnInit(): void {
// //     toggleSidebar(){
// //       this.toggleSidebarForMe.emit();
// //     }
  
// //     this.cartService.getProducts()
// //     .subscribe(res=>{
// //       this.totalItem = res.length;
// //     })
// //   }
// //   search(event:any){
// //     this.searchTerm = (event.target as HTMLInputElement).value;
// //     console.log(this.searchTerm);
// //     this.cartService.search.next(this.searchTerm);
// //   }
// // }
// // function toggleSidebar() {
// //   throw new Error('Function not implemented.');
// // }


import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';


@Component({
  selector: 'app-paynow',
  templateUrl: './paynow.component.html',
  styleUrls: ['./paynow.component.scss']
})
export class PaynowComponent implements OnInit {

  constructor(private cartService : CartService) { }
  handler:any = null;
  ngOnInit() {
 
    this.loadStripe();
  }
 
  pay(amount: any) {    
 
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51M5N4YSEcEtB2hwIyPy8lwxB98H4LHXcwziRUyQK2gn5crnpmnPDl2lZqpSu6enI3LL9cphz0CgttELckz6TAhml00SzhaMmqX',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token)
        alert('Payment Done successful');
        
      }
    });
 
    handler.open({
      name: 'PayNow',
      description: 'Debit/Credit Card',
      amount: amount * 100
    });
 
  }
 
  loadStripe() {
     
    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51M5N4YSEcEtB2hwIyPy8lwxB98H4LHXcwziRUyQK2gn5crnpmnPDl2lZqpSu6enI3LL9cphz0CgttELckz6TAhml00SzhaMmqX',
          locale: 'auto',
          token: function (token: any) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            console.log(token)
            alert('Payment Success!!')
            
            
          }
        });
      }
       
      window.document.body.appendChild(s);
    }
  }
}



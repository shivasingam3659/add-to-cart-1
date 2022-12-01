import { Component, OnInit } from '@angular/core';
import { Emitter } from '../../admin/authEmitter';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  isLoggedIn = false ;

  constructor() { }

  ngOnInit(): void {
    Emitter.authEmitter.subscribe(res=>{
      this.isLoggedIn = res
    })
  }

  logout(){
    localStorage.removeItem('token')
    Emitter.authEmitter.emit(false)
  }

}
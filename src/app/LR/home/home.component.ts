import { Component, OnInit } from '@angular/core';
import { Emitter } from '../../admin/authEmitter';
import { HomeService } from '../../service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userName = null ;

  constructor(private homeService : HomeService) { }

  ngOnInit(): void {
    this.homeService.accessHome().subscribe({next: (res) => {
      this.userName = res.username
      Emitter.authEmitter.emit(true)
    },error : (err) =>{
      Emitter.authEmitter.emit(false)
    }})
  }

}
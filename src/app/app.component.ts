import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private userService:UserService){}

  title = 'e-commerce';
  cartCount:number=0
  handleCart(value:number){
    this.cartCount=value
    console.log('cart count',this.cartCount)
  }
  ngOnInit(): void {
    this.userService.$user.subscribe((val)=>{
      console.log('user service',val)
    })
  }

}

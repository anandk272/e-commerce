import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/items.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cartItems:CartItem[]=[]
  totPrice:number=0
  totItems:number=0
  constructor(private cartServices:CartService){

  }
  ngOnInit(): void {

    this.cartServices.cartObservable.subscribe((val:any)=>{

      this.cartItems=val
      let price=0
      let items=0
      this.cartItems.map((item)=>{
        price+=item.price*item.count
        items+=item.count
        console.log(item,item.price,this.totPrice,'initiated')
        
      })
      this.totItems=items
      this.totPrice=price
      console.log('cart',val);
      

    })
      
  }

}

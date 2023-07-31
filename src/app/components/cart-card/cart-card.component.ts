import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/items.interface';

@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.css']
})
export class CartCardComponent {
  constructor(private cartServices:CartService){}
  @Input() data:any
  incrementCount(){
    this.data.count+=1
    this.cartServices.updateCartItem(this.data)

    
      
    

  }
  decrementCount(){
    if(this.data.count>1){
      this.data.count-=1
    }else this.handleDelete()
    this.cartServices.updateCartItem(this.data)

  }
  handleDelete(){
    this.cartServices.deleteCartItem(this.data)
  }

}

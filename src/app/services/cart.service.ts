import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem, Item } from 'src/items.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnInit{
  isPresent:boolean=false

  cartObservable=new BehaviorSubject<Array<CartItem>>([])
  cartItems:Array<CartItem>=[]
  cartCount:number=0

  constructor() { }
  
  setCartItems(item:Item){
    this.isPresent=this.cartItems.some(_item=>_item.id==item.id)
    if(this.isPresent){
      
      this.cartItems.forEach(_item=>item.id==_item.id?_item.count+=1:null)
      console.log("present",this.cartItems)
    }else{
      this.cartItems.push({...item,count:1})
      console.log('added to cart',this.cartItems)
    }
    this.cartObservable.next(this.cartItems)
    this.cartCount+=1

  }
  updateCartItem(_item:CartItem){
    this.cartItems.map((item)=>{
      if(item.id===_item.id){
        item.count=_item.count
        
      }
    })
    console.log('item updated',this.cartItems)
    this.cartObservable.next(this.cartItems)


  }
  deleteCartItem(_item:CartItem){
    const index=this.cartItems.indexOf(_item)
    this.cartItems.splice(index,1)
    this.cartObservable.next(this.cartItems)
  }


  ngOnInit(): void {
    // this.cartObservable.subscribe(t=>{
    //   console.log('behav subject initiated ')
    //   this.cartItems=t
    // })
      
  }
}

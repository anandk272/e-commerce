import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { CartItem, Item } from 'src/items.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit{

  constructor(private cartservice:CartService,private router:Router){}
  @Input() item:Item={
    id:0,
    image:'',
    description:'',
    price:0,
    category:'',
    rating:{count:0,rate:0},
    title:''
  }
  
  @Output() itemEvent=new EventEmitter()
  inCart:boolean=false
  

  addToCart(item:Item){
    //this.itemEvent.emit(item)
    this.cartservice.setCartItems(item)
  }
  goToItem(id:number){
    this.router.navigate(['items',id])

  }
  ngOnInit(): void {
      this.cartservice.cartObservable.subscribe()
  }
  
  

}

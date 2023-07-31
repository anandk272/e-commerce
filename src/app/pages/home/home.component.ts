import { Component, DoCheck, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { FilterService } from 'src/app/services/filter.service';
import { SearchService } from 'src/app/services/search.service';
import { UserService } from 'src/app/services/user.service';
import { CartItem, Item } from 'src/items.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements DoCheck,OnInit{
  cartItems:Array<CartItem>=[]
  items:Array<Item>=this.searchService.filtered
  isPresent:boolean=false
  cartCount:number=0
  @Output() cartEvent=new EventEmitter()

  constructor(private searchService:SearchService,private filterService:FilterService,private dataServices:DataService,private userService:UserService){
    

  }

  

  ngDoCheck(): void {
      //this.items=this.searchService.getItems()
      // console.log('items',this.items)
  }

  addToCart(item:Item){
    this.isPresent=this.cartItems.some(_item=>_item.id==item.id)
    if(this.isPresent){
      
      
      this.cartItems.forEach(_item=>item.id==_item.id?_item.count+=1:null)
      console.log("present",this.cartItems)
    }else{
      this.cartItems.push({...item,count:1})
      console.log('added to cart',this.cartItems)
    }
    this.cartCount+=1
    this.cartEvent.emit(this.cartCount)
    
  }
  ngOnInit(): void {

    this.dataServices.getPosts()
    
    

    this.searchService.getItemObservable.subscribe((val)=>{
      console.log(val,'searched observable')
      this.items=val
      
    })
    this.filterService.filteredObservable.subscribe(val=>{
      console.log(val,'filter observible')
      this.items=val
    })
    
    this.dataServices.dataObservable.subscribe((val:any)=>{
      console.log('subscribed dataobservable',val)
      this.items=val
      this.searchService._items=val
      
    })
  


   
  }
}

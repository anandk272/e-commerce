import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import { Item } from 'src/items.interface';
import { SearchService } from './search.service';

@Injectable({
  providedIn: 'root'
})
export class FilterService implements OnInit{
  _items:Array<Item>=[]
  filtered:Array<Item>=[]

  constructor() { }
  
  filteredObservable=new Subject <Array<Item>>()

  setItems(val:Array<Item>){
    this._items=val
    this.filteredObservable.next(val)
    
  }
  getOfferItems(rating:number){
    
    this.filtered=this._items.filter(item=>item.rating.rate>=rating)
    this.filteredObservable.next(this.filtered)
    
    console.log('filter subject initiated',this.filtered,rating)

  }
  sortItems(lowToHigh:boolean){
    console.log('sorting')
    

  }
  ngOnInit(): void {
    // this.searchService.getItemObservable.subscribe(val=>{
    //   this._items=val
    // })
    console.log('ngoninit works')
      
  }
  

}

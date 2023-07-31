import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, filter } from 'rxjs';

import { Item } from 'src/items.interface';
import { FilterService } from './filter.service';
import { _isTestEnvironment } from '@angular/cdk/platform';
//import { items } from 'src/db';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService implements OnInit{

  constructor(private filterService:FilterService,private dataService:DataService) { 
       }

  _items:Array<Item>=[]
  filtered:Array<Item>=[]
  getItemObservable=new Subject<Array<Item>>()



  
  ngOnInit(): void {
    

  }

  setSearchItems(searchText:string){
    if(searchText===''){
      this.filtered=this._items
    }else{
      this.filtered=this._items.filter(item=>item.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())||item.category.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))

    }
    this.getItemObservable.next(this.filtered)
    this.filterService.setItems(this.filtered)
    
    

  }

  
 



  
}

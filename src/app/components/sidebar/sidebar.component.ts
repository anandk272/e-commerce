import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FilterService } from 'src/app/services/filter.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  constructor(private filterService:FilterService,private searchService:SearchService,private dataService:DataService){

  }
  handleRating(rating:number){
    this.filterService.getOfferItems(rating)

  }
  handleSort(){
    this.filterService.sortItems(true)
  }
  ngOnInit(): void {
    this.dataService.dataObservable.subscribe((val:any)=>{
      console.log('items to set in filter',val)
      this.filterService.setItems(val)
    })
    
      
  }


}

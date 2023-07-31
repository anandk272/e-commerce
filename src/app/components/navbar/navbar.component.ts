import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnChanges,OnInit,OnChanges{

  constructor(private searchService:SearchService,private cartService:CartService,private router:Router){}

  @Input() cartCount:number=0
  _cartCount:number=0

  isLoggedIn:boolean=false
  isClicked:boolean=false
  searchText:string=''
  loginDetails:{username:string,password:string}={username:'',password:''}
  handleClick(){
    this.isClicked=!this.isClicked
    console.log('clicked',this.isClicked)
  }
  // ngDoCheck(): void {
  //     console.log(this.loginDetails,'-two way binding bw components')
  // }
  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes,'ngonchanges')
  }

  handleSearch(){
    this.searchService.setSearchItems(this.searchText)
    this.router.navigate(['/'])
    

  }
  
  ngOnInit(): void {
    this.cartService.cartObservable.subscribe((res)=>{
      console.log('cart items',res,this.cartCount)
      this._cartCount=0
      res.map(item=>this._cartCount+=item.count)
    })
      
  }
  


}

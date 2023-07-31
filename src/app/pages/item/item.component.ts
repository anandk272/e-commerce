import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit{

  constructor(private activatedRoute:ActivatedRoute,private http:HttpClient,private cartServices:CartService){}
  id:number=0
  data:any

  addToCart(){
    this.cartServices.setCartItems(this.data)
  }

ngOnInit(): void {
    this.activatedRoute.params.subscribe((res)=>{
      console.log(res)
      this.id=res['id']
      this.http.get(`https://fakestoreapi.com/products/${this.id}`).subscribe((val:any)=>{
      this.data=val
      })
      

    })
}

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
// import { items } from 'src/db';
import { Item } from 'src/items.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  readonly ROOT_URL='https://localhosthttp://localhost:57362/'
  dataObservable=new Subject()
  data:Array<Item>=[]
  _posts:any

  getPosts(){
    
    this._posts=this.http.get('https://fakestoreapi.com/products')
    this._posts.subscribe((val:any)=>{
      this.data=val
      this.dataObservable.next(this.data)
    })
    
    
  }
  setPosts(){
    console.log('set posts worked')
    
  }

}

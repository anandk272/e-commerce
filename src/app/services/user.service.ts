import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  $user=new Subject()
  setUSer(){
    console.log(this.$user)
  }




}

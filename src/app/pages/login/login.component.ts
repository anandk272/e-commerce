import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private http:HttpClient,private userService:UserService){}

  reactiveForm:FormGroup
  handleSignin(){
    console.log(this.reactiveForm.value)
    this.userService.$user.next({
      username:'abcd',password:'abcd'
    })
    

    
  }
    
  
  ngOnInit(): void {
      this.reactiveForm=new FormGroup({
        username:new FormControl(null),
        password:new FormControl(null)
      })
      this.http.get('https://fakestoreapi.com/users')
      .subscribe(val=>{
        console.log
      })
  }



}

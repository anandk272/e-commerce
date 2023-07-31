import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  constructor(private http:HttpClient,private router:Router){}
  reactiveForm:FormGroup

  handleRegister(){
    console.log(this.reactiveForm)
    this.http.post('https://fakestoreapi.com/users',{
      body:JSON.stringify({...this.reactiveForm.value,
        phone:'1-570-236-7033',
        address:{...this.reactiveForm.value.address,
        geolocation:{lat:'-37.3159',long:'81.1496'}}})
    })
      .subscribe(res=>{
        console.log(res)
        this.router.navigate(['login'])
      },error=>{
        console.log(error)

      })
  }

  
ngOnInit(): void {
    // this.http.post('https://fakestoreapi.com/users',{
    //           email:'John@gmail.com',
    //           username:'johnd',
    //           password:'m38rmF$',
    //           name:{
    //               firstname:'John',
    //               lastname:'Doe'
    //           },
    //           address:{
    //               city:'kilcoole',
    //               street:'7835 new road',
    //               number:3,
    //               zipcode:'12926-3874',
    //               geolocation:{
    //                   lat:'-37.3159',
    //                   long:'81.1496'
    //               }
    //           },
    //           phone:'1-570-236-7033'
    //       }
    //   ).subscribe((val)=>{
    //     console.log('registered',val)
    //   })
    this.reactiveForm=new FormGroup({
      username:new FormControl(null,[Validators.required,Validators.minLength(4)]),
      password:new FormControl(null,Validators.required),
      
      name:new FormGroup({
        firstName:new FormControl(null,Validators.required),
        lastName:new FormControl(null,Validators.required),
      }),
      email:new FormControl(null,Validators.required),
      address:new FormGroup({
        city:new FormControl(null,Validators.required),
      street:new FormControl(null,Validators.required),
      zipcode:new FormControl(null,Validators.required),
      number:new FormControl(null,Validators.required)

      }),
      
    })
  
}
}

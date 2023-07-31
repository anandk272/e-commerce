import { OnInit } from '@angular/core';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControlName, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroupDirective } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ResolveEnd } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signin-popup',
  templateUrl: './signin-popup.component.html',
  styleUrls: ['./signin-popup.component.css']
})
export class SigninPopupComponent implements OnChanges,OnInit{
  @Input() loginDetails: { username: string, password: string } = { username: '', password: '' }
  @Output() loginDetailsChange = new EventEmitter()

  reactiveForm:FormGroup

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes, 'initiated')
  }
  handleSignin() {

    console.log('logged in',this.reactiveForm)
  }
  noSpaceAllowed(control:FormControl){
    if(control.value!==null && control.value.indexOf(' ')>-1){
      return {noSpaceAllowed:true}
    }else return null
  }
  //custom async validator
  emailNotAllowed(control:FormControl):Promise<any>|Observable<any>{

    const response=new Promise((resolve,reject)=>{
      setTimeout(() => {
        if(control.value==='abcd@gmail.com'){
          resolve ({emailNotAllowed:true})

        }else resolve(null)
        
      }, 1000);
    })

    return response
  }
  password(control:FormControl){
    
  }
  ngOnInit(): void {
      this.reactiveForm=new FormGroup({
        username:new FormControl(null,[Validators.minLength(3),Validators.required,this.noSpaceAllowed]),
        password:new FormControl(null,Validators.min(4)),
        email:new FormControl(null,[Validators.email,Validators.required],this.emailNotAllowed)
      })
  }
}

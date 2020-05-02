import { Component, OnInit } from '@angular/core';
import {Router,NavigationEnd} from '@angular/router';
import { FormGroup, FormControl ,FormBuilder,Validators, AbstractControl} from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';


@Component({
  selector: 'app-signup-login',
  templateUrl: './signup-login.component.html',
  styleUrls: ['./signup-login.component.css']
})
export class SignupLoginComponent implements OnInit {
  route;
  signupForm:FormGroup;
  loginForm:FormGroup;
  submitted=false;
  isInvalid=false;
  isUserNameEmpty=false;
  isEmailEmpty=false;
  isLoginInvalid=false;

  constructor( private router:Router , private formBuilder:FormBuilder ,private authService:AuthenticationService) {

    this.router.events.forEach((event) => {
      if(event instanceof NavigationEnd) {
        this.route=event.urlAfterRedirects.substr(1);
      }    
    });
    
   }

  ngOnInit() {
    if(this.route==='signup'){
      this.signupForm = this.formBuilder.group({
        username :['',[Validators.required,Validators.maxLength(30)]],
        email:['',Validators.required],
        country :['',Validators.required],
        age :['',Validators.required],
        password :['',Validators.required]
        })
        
    }
    
    
    else if(this.route==='login'){
      this.loginForm = this.formBuilder.group({
        username :['',[Validators.required,Validators.maxLength(30)]],
        password :['',Validators.required],
        })
    }
  }
  

  routeToLogin(){
    this.router.navigateByUrl('/'+'login');
  }

  routeToSignup(){
    this.router.navigateByUrl('/'+'signup');
  }

  submitSignup(){
  
    
    
    if(this.signupForm.status==='INVALID'){
      this.isInvalid=true;
    }
    else{
      this.isInvalid=false;
    }
    console.log(this.signupForm);
    // if(this.signupForm.value.username===''){
      
    // }
 
  console.log(this.signupForm.controls.username.status);
  }

  submitLogin(){
  console.log(this.loginForm);
  if(this.loginForm.status==='INVALID'){
    this.isLoginInvalid=true;
  }
  else{
    this.isLoginInvalid=false;
  }
  }

  addUser(){
    console.log(this.signupForm.value);
    this.authService.addUsers(this.signupForm.value).subscribe((data:any)=>{
         console.log("Success");
    });
  }

  login(){
    this.authService.login(this.loginForm.value).then((data:any)=>{
      console.log("Success");
 }).catch(err=>{
   console.log(err);
 });
  }
}

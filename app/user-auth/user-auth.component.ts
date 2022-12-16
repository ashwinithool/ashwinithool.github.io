import { Component, OnInit } from '@angular/core';
import { login, signUp } from '../data-type';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {

  showLogin:boolean=true
authError:string="";
  constructor(private user:UserService) { }

  ngOnInit(): void {
    this.user.userAuthReload();
  }
  signUp(data:signUp){
    this.user.userSignUp(data)

  }
  login(data:login){
    this.user.userLogin(data)
    this.user.invalidUserAuth.subscribe((result)=>{
      console.warn("apple",result)
      if(result){
       if(result){
        this.authError="Please Enter Valid Details"
       }
      }
    })
  }
  openSignUp(){
this.showLogin=false
  }
  openLogin(){
    this.showLogin=true;
  }

}


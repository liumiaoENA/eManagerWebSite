import { Component } from '@angular/core';

import {Router} from "@angular/router";
import {Location} from '@angular/common';

import {LoginService} from '../services/login.service'
@Component({
  selector: 'login-page',
  templateUrl: './login.html',
  styleUrls:['./login.css']
})
export class LoginComponent {
    userID:number;
    userName:string;
    passWord:string;
    autoLogin:boolean=false;
    blocksubmit:boolean=false;
    showerror:boolean=true;
    msgs:any[]=[];
    constructor(private router:Router,private location:Location,private loginService:LoginService,){

    }
    show() {
        this.msgs.push({severity:'error', summary:'用户名或密码错误', detail:''});
    }
    login(){
        this.blocksubmit=true;

        this.loginService.login({username:this.userName,password:this.passWord,autoLogin:this.autoLogin}).then((res)=>{
        if(res){
          this.showerror=false;
          this.userID=res;
          this.blocksubmit = false;
          setTimeout(()=>{
                this.location.replaceState('/');
                this.router.navigate(['projectList'],{queryParams:{ticket:res}})
         },500);
        }
        else{
            this.blocksubmit = false;
            this.show();
        }
      });

    }
}

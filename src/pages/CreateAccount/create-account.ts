import { Component,OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Location} from '@angular/common';

import{AccountService} from '../../services/account.service'
import {ConfirmationService,Message} from 'primeng/primeng';
@Component({

  selector: 'create-account',
  templateUrl: './create-account.html',
  styleUrls:['./create-account.scss'],
  providers:[ConfirmationService,AccountService]
})

export class CreateAccountComponent implements OnInit {
  userinfo:any={isSeller:true}
  submiturl:string;
  newAccountName:string;
  newAccountPwd:string;
  msgs:Message[];
  active:string='createAccount';
  constructor(private router:Router,private location:Location,private confirmationService:ConfirmationService,private accountService:AccountService){
  }

  ngOnInit():void{
    //this.token=localStorage.getItem('token');
  }

  submitHandler(e:any){
    this.newAccountName="经销商A";
    this.newAccountPwd="电话号码";
    this.show();
    /*this.accountService.createAccount(this.userinfo,this.submiturl).then((res)=>{

  });*/
  }
  show() {
    this.msgs = [];
    this.msgs.push({severity:'success', summary:'用户名', detail:this.newAccountName});
    this.msgs.push({severity:'success', summary:'密码', detail:this.newAccountPwd});

  }

}

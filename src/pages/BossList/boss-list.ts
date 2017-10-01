import { Component,OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Location} from '@angular/common';

import{AccountService} from '../../services/account.service'
import {ConfirmationService,Message} from 'primeng/primeng';
@Component({

  selector: 'boss-list',
  templateUrl: './boss-list.html',
  styleUrls:['./boss-list.scss'],
  providers:[ConfirmationService,AccountService]
})

export class BossListComponent implements OnInit {
  showList:any[]=[];
  pageSize:number=20;
  pageNum:number;
  total:number;
  bossListUrl:string;
  constructor(private router:Router,private location:Location,private confirmationService:ConfirmationService,private accountService:AccountService){
  }

  ngOnInit():void{
    /*this.accountService.bossList(this.bossListUrl).then((res)=>{
      this.showList=res;
      this.pageNum=Math.ceil(this.total/this.pageSize);
    })*/
    this.showList=[{name:"经销商A",phoneNumber:"13333333333",accountName:"13333333333",status:"未审核"}];
    this.pageNum=1;
    this.total=1;
  }

}

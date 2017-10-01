import { Component,OnInit } from '@angular/core';

import {Router} from "@angular/router";
import {Location} from '@angular/common';

import {MenuItem,ConfirmationService} from 'primeng/primeng';
@Component({
  selector: 'header',
  templateUrl: './header.html',
  styleUrls:['./header.scss'],
  providers:[ConfirmationService]
})

export class HeaderComponent implements OnInit {
  constructor(private router:Router,private location:Location,private confirmationService:ConfirmationService){
  }

  ngOnInit():void{
  }

  logout():void{
    this.confirmationService.confirm({
      message: '确定要退出吗?',
      accept: () => {
        localStorage.removeItem("token");
        this.router.navigate([`login`]);
      }
    });

  }
}

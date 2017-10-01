import { Component,OnInit,Input } from '@angular/core';

import {Router} from "@angular/router";
import {Location} from '@angular/common';

@Component({
  selector: 'left-nav',
  templateUrl: './left-nav.html',
  styleUrls:['./left-nav.scss'],
})

export class LeftNavComponent implements OnInit {
  @Input() active:string;
  menuitem:any[];
  constructor(private router:Router,private location:Location){
  }

  ngOnInit():void{
    this.menuitem=[
      {
          name:"资料录入",
          url:"createAccount"
      },
      {
        name:"收益情况",
        url:""
      },
      {
        name:"查询审批",
        url:""
      },
      {
        name:"人员管理",
        url:""
      }
    ]
  }

  navToPage(url:string){
    this.router.navigate([url]);
    //alert(this.active);
  }
}

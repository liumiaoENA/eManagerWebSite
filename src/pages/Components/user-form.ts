import { Component,OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Router} from "@angular/router";
import {Location} from '@angular/common';


import {MenuItem,ConfirmationService} from 'primeng/primeng';
@Component({
  selector: 'user-form',
  templateUrl: './user-form.html',
  styleUrls:['./user-form.scss'],
  providers:[ConfirmationService]
})

export class UserFormComponent implements OnInit {
  @Input() userinfo:any;
  @Output() submitEvent=new EventEmitter();
  items: MenuItem[];
  constructor(private router:Router,private location:Location,private confirmationService:ConfirmationService){
  }

  ngOnInit():void{
  }

  onSubmit(){
    if((!this.userinfo.isSeller) && (!this.userinfo.isBoss)){
      return false;
    }
    this.confirmationService.confirm({
      message: '确定要创建吗?',
      accept: () => {
        this.submitEvent.emit(this.userinfo);
      }
    });

  }
}

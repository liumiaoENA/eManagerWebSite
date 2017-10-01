import { Component,OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Router} from "@angular/router";
import {Location} from '@angular/common';

import {ConfirmationService} from 'primeng/primeng';
@Component({
  selector: 'table-list',
  templateUrl: './table-list.html',
  styleUrls:['./table-list.scss'],
  providers:[ConfirmationService]
})

export class TableListComponent implements OnInit {
  @Input() total:number;
  @Input() showList:any[];
  @Input() pageSize:number;
  @Input() pageNum:number;

  searchModel:any={pageNo:1};
  constructor(private router:Router,private location:Location,private confirmationService:ConfirmationService){

  }

  ngOnInit():void{
  }

}

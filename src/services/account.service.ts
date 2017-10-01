import {Injectable} from '@angular/core';
import{Http,Headers,RequestOptions,Response}from '@angular/http';
import {Router} from "@angular/router";
import 'rxjs/add/operator/toPromise';

import{ConfigService} from './config.service'
@Injectable()
export class AccountService{
  private serverUrl:string
  private submiturl:string

  constructor(private http:Http,private router:Router,private configService:ConfigService){
    this.serverUrl=configService.getServerUrl();
  }

  token:string=localStorage.getItem('token');

  createAccount(model:any,submiturl:string):Promise<any>{
    let headers=new Headers();
    headers.append('Content-Type','application/json');
    //headers.append('Authorization','Bearer '+this.token);
    let options=new RequestOptions({headers:headers});
    return this.http.post(this.serverUrl+submiturl,model,options).toPromise()
      .then(res =>res.json())
      .catch((error)=>{
        this.handleError(error);
      });
  }

  bossList(bossListUrl:string):Promise<any[]>{
    let headers=new Headers();
    headers.append('Content-Type','application/json');
    //headers.append('Authorization','Bearer '+this.token);
    let options=new RequestOptions({headers:headers});
    return this.http.get(this.serverUrl+bossListUrl,options).toPromise()
      .then(res =>res.json())
      .catch((error)=>{
        this.handleError(error);
      });
  }


  private handleError(error:any):void{
    if(error.status===401)
      this.router.navigate([`login`]);
    //return Promise.reject(error.message||error);
  }


}

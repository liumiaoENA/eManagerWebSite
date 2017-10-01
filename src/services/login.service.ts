import {Injectable} from '@angular/core';
import{Http,Headers,RequestOptions,Response}from '@angular/http';
import {Router} from "@angular/router";
import 'rxjs/add/operator/toPromise';

import{ConfigService} from './config.service'
@Injectable()
export class LoginService{
    //topicType:Promise<TopicType[]>
    login:(model:any)=>Promise<any>;
    checkpermission:(id:number)=>boolean;
    private handleError(error:any):Promise<any>{
        /*if(error.status===401)
            this.router.navigate([`login`]);*/
        return Promise.reject(error.message||error);
    }
    constructor(private http:Http,private router:Router,private configService:ConfigService){
        let pids:number[]=[];
        let serverUrl=configService.getServerUrl();;
    //serverUrl='http://10.10.10.80:3000/';
        let loginUrl:string=serverUrl+'api/ZZJLogin/Login';
        let permissionUrl:string=serverUrl+'api/ZZJLogin/Permissions';

        this.login=(model:any):Promise<any>=>{
            let headers=new Headers();
            headers.append('Content-Type','application/json');
            let options=new RequestOptions({headers:headers});
            return this.http.post(loginUrl,model,options).toPromise()
            .then(res =>{
                let json=res.json();
                if(json.pids){
                    json.pids.forEach((i)=>{
                        pids.push(i);
                    })
                }
                localStorage.setItem("token",json.Ticket);
                localStorage.setItem("pers",json.pids.join(','))
                return "1";
            })
            .catch(this.handleError);
        }
        this.checkpermission=(id:number):boolean=>{
            if(!pids || !pids.length){
              if(localStorage.getItem("pers")){
                pids=[];
                let t=localStorage.getItem("pers").split(',');
                t.forEach((ii)=>{
                  pids.push(+ii);
                })
              }
              else
                return false;
            }
            if(!pids || !pids.length)
              return false;
            if(pids.indexOf(id)>-1)
              return true;
            else
              return false;
            }

    }

}

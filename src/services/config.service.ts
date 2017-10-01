import {Injectable} from '@angular/core';

@Injectable()
export class ConfigService{
    //private serviceurl="http://localhost:49929/";
    private serviceurl="http://10.10.4.4:3000/";
    //private serviceurl="http://kzzbim.com:3000/";

    getServerUrl(){
        return this.serviceurl;
    }
}

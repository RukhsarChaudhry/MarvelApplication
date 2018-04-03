import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RESTConnectorService } from './../RestService/index';


@Injectable()

export class UserService {
    constructor(public restService: RESTConnectorService) { }


    RegisterUser(values: any) {
        let url = "users/register";
        return this.restService.httpPostWeb(values, url);

    }
}
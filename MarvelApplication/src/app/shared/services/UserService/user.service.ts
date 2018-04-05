import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { User, AuthToken, Credentials } from './../../entities/index';
import { RESTConnectorService } from './../RestService/index';


@Injectable()

export class UserService {
    constructor(public restService: RESTConnectorService, private http: Http) { }
    public signIn(credentials: Credentials): Observable<any> {
        let user = {
            'user': {
                'email': credentials.email,
                'password': credentials.password
            }
        }
        return this.http.post("https://tatto.herokuapp.com/api/users/authenticate", user, "application/x-www-form-urlencoded")
            .map(user => {
                console.log(user);
                let data = user.json();
                console.dir(data);
                if (data.user.token) {
                    localStorage.setItem('currentUser', data.user.token);
                }

                return user;
            });

    }
    public getUserInfo(): Observable<User> {
        let url = "api/Account/GetUserInfo";
        return
    }
    RegisterUser(values: any): Observable<any> {
        let user = {
            'user': {
                'first_name': values.first_name,
                'last_name': values.last_name,
                'email': values.email,
                'password': values.password
            }
        }
        let url = "users/register";
        return this.restService.httpPostWeb(user, url);

    }

}
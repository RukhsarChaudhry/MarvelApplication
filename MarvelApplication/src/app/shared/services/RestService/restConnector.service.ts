import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";


@Injectable()
export class RESTConnectorService {
    Url: any = "https://tatto.herokuapp.com/api/";
    constructor(public http: Http) { }
    private handleError(error: any, blocking: Boolean) {
        //let body = error.json();
        if (blocking) {
        }
        return Observable.throw(error);
    }

    parseResponse(res: any) {
        console.log(res);
        let body = res.json();
    }

    private getHeader(contentType: string, isSecure: boolean): Headers {
        const headers = new Headers();
        headers.append("Content-Type", contentType);
        // headers.append('Access-Control-Allow-Origin', '*');
        // // headers.append('Access-Control-Allow-Origin', 'GET, POST, PATCH, PUT, DELETE');
        // if (isSecure) {
        //     let token = this.authTokenService.getToken();
        //     if (token) {
        //         headers.append("Authorization", `Bearer ${token.access_token}`);
        //     }
        // }
        return headers;
    }

    httpGetWeb() {

    }
    httpPostWeb(obj: any, url: any, contentType: string = 'application/json') {
        url = this.Url + url;
        let body = (contentType == 'application/json') ? JSON.stringify(obj) : obj;
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions();
        return this.http.post(url, body, options)
            .map((res: Response) =>
                this.parseResponse(res)
            )
            .catch((error) => this.handleError(error, true));

    }
    httpDeleteWeb() {

    }
    httpPutWeb() {

    }

}    
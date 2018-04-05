import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RESTConnectorService } from './../RestService/index';

@Injectable()
export class TattoService {
    constructor(public restService: RESTConnectorService) {

    }
    createTatto(values: any): Observable<any> {
        let tatto = {
            'tatto': {
                'artist_name': values.artist_name,
                'screen_name': values.screen_name,
                'body_placement': values.body_placement,
                'category': values.category,
                'color': values.color,
                'description': values.description,
                'image_name': values.image_name,
                'avatar': values.avatar
            }
        }
        var obj = new Object();
        obj['token'] = localStorage.getItem('currentUser');
        obj['tatto'] = tatto;
        console.log(tatto);
        let url = "tattos";
        return this.restService.httpPostSecureWeb(obj, url);

    }
    getTatto(): Observable<any> {
        let url = "tattos?token=" + localStorage.getItem('currentUser');
        return this.restService.httpGetSecureWeb(url);
    }
    updateTatto(values: any): Observable<any> {
        let tatto = {
            'tatto': {
                'artist_name': values.artist_name,
                'screen_name': values.screen_name,
                'body_placement': values.body_placement,
                'category': values.category,
                'color': values.color,
                'description': values.description,
                'image_name': values.image_name,
                'avatar': values.avatar
            }
        }
        var obj = new Object();
        obj['token'] = localStorage.getItem('currentUser');
        obj['tatto'] = tatto;
        console.log(tatto);
        let url = "tattos";
        return this.restService.httpPutWeb(values, url);
    }
    deleteTatto(id: any): Observable<any> {
        console.log(id);
        var token = localStorage.getItem('currentUser');
        let url = "tattos/" + id;
        return this.restService.httpDeleteSecureWeb(url, token);
    }

}
//import { Injectable, EventEmitter } from '@angular/core';
import { Injectable, Inject } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs/Rx';
import 'rxjs/add/operator/share';
import { Observer } from 'rxjs/Observer';
import { User, AuthToken } from '../../entities/index';
import { UserService } from './../UserService/index';
import { AuthTokenService } from './../AuthService/index';


/**
 * This class provides the Session Service to set / reset block ui event.
 */
@Injectable()
export class SessionService {

    public apiServer: string;
    public version: string;
    //public sessionEvent: EventEmitter<any>;

    private user: User = new User();
    sessionEvent$ = new ReplaySubject<User>(1);

    constructor(private userService: UserService,
        public authService: AuthTokenService) {
        if (authService.hasToken()) {
            this.getUserInfo();
        }
        else {
            this.notify();
        }
    }
    /**
     * Mark user authenticated and brodcast user object via sessionEvent
     * @param {User} user - user object
     * @authenicated
     */
    public authenicated(token: AuthToken): void {
        this.authService.setToken(token);
        this.getUserInfo();
    }
    /**
     * Logout current user
     * @startBlock
     */
    private getUserInfo() {
        this.userService.getUserInfo().subscribe(
            user => {
                this.user = user;
                this.user.isAuthenticated = true;
                // if (this.user.role == UserRole.ResAdmin) {
                //     this.restaurantService.getRestaurant(this.user.restaurantId).subscribe(
                //         res => {
                //             this.notify();
                //             this.setRestaurant(res);
                //         },
                //         error => {
                //         }
                //     );
                // }
                // else {
                //     this.notify();
                // }
            },
            error => {
                this.user = new User();
                this.notify();
            }
        );
    }

    public logout(): void {
        alert();
        this.user = new User();
        this.user.isAuthenticated = false;
        this.authService.clearToken();
        this.notify();
    }

    public getUser(): User {
        return this.user;
    }
    private notify() {
        this.sessionEvent$.next(this.user);
    }

}
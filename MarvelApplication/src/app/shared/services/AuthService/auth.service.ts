import { Injectable, Inject } from '@angular/core';
import { AuthToken } from '../../entities/index';

@Injectable()
export class AuthTokenService {
    private tokenKey = "RUKHSARQUIZAPPTOKEN";
    private token: AuthToken = null;
    constructor() {
        // let role: UserRole.AppUser;
        this.tokenKey = this.tokenKey;
        if (typeof (Storage) != "undefined") {
            const tokenJson = localStorage.getItem(this.tokenKey);
            this.token = JSON.parse(tokenJson);
        }
    }
    getToken(): AuthToken {
        if (this.token == null && typeof (Storage) != "undefined") {
            const tokenJson = localStorage.getItem(this.tokenKey);
            this.token = JSON.parse(tokenJson);
        }
        return this.token;
    }
    setToken(token: AuthToken): void {
        if (typeof (Storage) !== "undefined") {
            localStorage.setItem(this.tokenKey, JSON.stringify(token));
            this.token = token;
        }
    }
    hasToken(): boolean {
        return this.token ? true : false;
    }
    clearToken(): void {
        localStorage.removeItem(this.tokenKey);
    }
}
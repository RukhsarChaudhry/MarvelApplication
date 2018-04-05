import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthTokenService } from './services/AuthService/index';
import { RESTConnectorService } from './services/RestService/index';
import { SessionService } from './services/SessionService/index';
import { UserService } from './services/UserService/index';
import { TattoService } from './services/TattoService/index';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: []
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                AuthTokenService,
                RESTConnectorService,
                SessionService,
                UserService,
                TattoService

            ]
        };
    }
}

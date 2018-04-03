import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { AuthTokenService } from './services/authtoken/index';
import { RESTConnectorService } from './services/RestService/index';
// import { SessionService } from './services/session/index';
import { UserService } from './services/UserService/index';

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
                // BlockUIService,
                // AuthTokenService,
                RESTConnectorService,
                // SessionService,
                UserService,

            ]
        };
    }
}

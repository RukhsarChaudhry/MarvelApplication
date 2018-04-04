import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { BlockUIService } from './services/blockui/index';
// import { AuthTokenService } from './services/authtoken/index';
import { RestConnectorService } from './services/RestService/index';
// import { SessionService } from './services/session/index';
// import { UserService } from './services/user/index';
// import { QuizService } from './services/index';

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
                RestConnectorService,
                // SessionService,
                // UserService,
                // QuizService

            ]
        };
    }
}

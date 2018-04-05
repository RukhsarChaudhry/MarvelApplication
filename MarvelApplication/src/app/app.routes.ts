import { Routes } from '@angular/router';

import { LoginRoutes } from './login/index';
import { TattoRoutes } from './tatto/index';


export const routes: Routes = [
    ...LoginRoutes,
    ...TattoRoutes,
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/admin',
        pathMatch: 'full'
    }
]
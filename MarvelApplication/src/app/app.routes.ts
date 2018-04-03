import { Routes } from '@angular/router';

import { LoginRoutes } from './login/index';


export const routes: Routes = [
    ...LoginRoutes,
    // ...DashboradRoutes,
    // ...ClientRoutes,
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
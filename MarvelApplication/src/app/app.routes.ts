import { Routes } from '@angular/router';




export const routes: Routes = [
    // ...HomeRoutes,
    // ...DashboradRoutes,
    // ...ClientRoutes,
    {
        path: '',
        redirectTo: '/admin',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/admin',
        pathMatch: 'full'
    }
]
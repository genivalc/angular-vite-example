import { Route, provideRouter } from '@angular/router';

const routes: Route[] = [
    {
        path: '',
        loadComponent: () => import('./home/home.component').then(c => c.HomeComponent)
    },
    {
        path: 'about',
        loadComponent: (): any => import('./about/about.component').then (c => c.AboutComponent)
    }
];

export const appRouting = [
    provideRouter(routes)
]
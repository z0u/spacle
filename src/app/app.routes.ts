import { Routes } from '@angular/router';
// import { AboutComponent } from './about/about.component';

export const routes: Routes = [{ path: 'about', loadComponent: () => import('./about/about.component').then(mod => mod.AboutComponent) }];
// export const routes: Routes = [{ path: 'about', component: AboutComponent }];

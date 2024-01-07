import { Routes } from '@angular/router';
import { newRoomGuard } from './room/newRoom.guard';
import { RoomComponent } from './room/room.component';

export const routes: Routes = [
  { path: '', redirectTo: 'r/new', pathMatch: 'full' },
  {
    path: 'r/:id',
    component: RoomComponent,
    canActivate: [newRoomGuard],
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./about/about.component').then((mod) => mod.AboutComponent),
  },
  { path: '**', redirectTo: '/' },
];

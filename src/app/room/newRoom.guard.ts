import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import ShortUniqueId from 'short-unique-id';

const { randomUUID } = new ShortUniqueId({ length: 10 });

export const newRoomGuard = (route: ActivatedRouteSnapshot) => {
  if (route.params['id'] === 'new')
    return inject(Router).navigate(['r', randomUUID()]);
  return true;
};

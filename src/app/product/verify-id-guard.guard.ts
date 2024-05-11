import { inject } from '@angular/core';
import { CanActivateFn, Route, Router } from '@angular/router';

export const verifyIdGuardGuard: CanActivateFn = (route, state) => {
  //inject function is used to inject service
  //in scenario that the constructor is not present

  const router: Router=inject(Router);
  const id = Number(route.paramMap.get('id'));

  if(isNaN(id)){
    router.navigate(['/products']);
    return false;
  }
  else
    return true;
};

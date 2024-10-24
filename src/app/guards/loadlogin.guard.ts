import { CanMatchFn } from '@angular/router';
import { LoginService } from '../login/login.service';
import { inject } from '@angular/core';

export const loadloginGuard: CanMatchFn = (route, segments) => {

  const loginService = inject(LoginService)

  return loginService.isLoggedIn;
};

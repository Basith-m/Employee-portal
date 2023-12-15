import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { ToasterService } from '../services/toaster.service';

export const authGuard: CanActivateFn = () => {
  const authStatus = inject(AuthService)
  const toaster = inject(ToasterService)
  const router = inject(Router)
  if(authStatus.isLoggined()){
    return true;
  }else{
    toaster.showWarning("Operation denied Please login...")
    router.navigateByUrl("")
    return false;
  }
};

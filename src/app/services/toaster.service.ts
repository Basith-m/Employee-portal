import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private toaster:ToastrService) { }

  showSuccess(msg:any) {
    this.toaster.success('Success',msg);
  }

  showError(msg:any) {
    this.toaster.error('Error',msg);
  }

  showWarning(msg:any) {
    this.toaster.info('Warning',msg);
  }
}

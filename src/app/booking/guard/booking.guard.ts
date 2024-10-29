import { CanDeactivateFn } from '@angular/router';
import { BookingComponent } from '../booking.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { inject } from '@angular/core';

export const bookingGuard: CanDeactivateFn<BookingComponent> = (component, currentRoute, currentState, nextState) => {

  const snackbar = inject(MatSnackBar)

  if(component.bookingForm.pristine){
    return component.bookingForm.pristine;
  } else {
    snackbar.open('You have unsaved changes!', 'DISCARD')
    return false
  }

  
};

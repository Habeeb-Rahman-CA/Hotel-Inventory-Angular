import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ConfigService } from '../services/config.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BookingService } from './booking.service';
import { exhaustMap, mergeMap, switchMap } from 'rxjs';
import { CustomValidator } from './validator/custom-validator';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatExpansionModule, MatIconModule, MatCheckboxModule, MatSnackBarModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent implements OnInit {

  bookingForm!: FormGroup

  get guests() {
    return this.bookingForm.get('guests') as FormArray
  }

  constructor(private configService: ConfigService, private formBuilder: FormBuilder, private bookingService: BookingService) { }

  ngOnInit(): void {
    this.bookingForm = this.formBuilder.group({
      roomId: new FormControl({ value: '1', disabled: false }, { validators: [Validators.required] }),
      guestEmail: new FormControl('', { validators: [Validators.required, Validators.email] }),
      checkIn: new FormControl(''),
      checkOut: new FormControl(''),
      bookingStatus: new FormControl(''),
      bookingAmount: new FormControl(''),
      bookingDate: new FormControl(''),
      guests: this.formBuilder.array([this.formBuilder.group({
        name: new FormControl('', { validators: [Validators.required] }),
        age: new FormControl('')
      })]),
      guestDetails: this.formBuilder.group({
        guestName: new FormControl('', { validators: [Validators.required, CustomValidator.ValidateSpecialChar('!')], }),
        guestAddress: new FormControl('', { validators: [Validators.required] }),
        mobileNumber: new FormControl(''),
      }),
      tnc: new FormControl(false, { validators: [Validators.requiredTrue] })
    })
    this.getBookingData()
    this.bookingForm.valueChanges.subscribe((data) => {
      this.bookingService.bookRoom(data).subscribe((data) => { })
    })

    this.bookingForm.valueChanges.pipe(
      exhaustMap((data) => this.bookingService.bookRoom(data))
    ).subscribe((data) => console.log(data))
  }

  getBookingData() {
    this.bookingForm.patchValue({
      roomId: '1',
      guestEmail: 'h@g.co',
    })
  }



  addBooking() {
    console.log(this.bookingForm.getRawValue());
    this.bookingService.bookRoom(this.bookingForm.getRawValue()).subscribe((data) => {
      console.log(data);
    })
    // this.bookingForm.reset()
  }

  addGuest() {
    this.guests.push(
      this.formBuilder.group({
        name: new FormControl(''),
        age: new FormControl('')
      })
    )
  }

  deleteGuest(i: number) {
    this.guests.removeAt(i)
  }

  addPassport() {
    this.bookingForm.addControl('passport', new FormControl(''))
  }

  deletePassport() {
    this.bookingForm.removeControl('passport')
  }

}
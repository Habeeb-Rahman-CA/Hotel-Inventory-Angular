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

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatExpansionModule, MatIconModule, MatCheckboxModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent implements OnInit {

  bookingForm!: FormGroup

  get guests() {
    return this.bookingForm.get('guests') as FormArray
  }

  constructor(private configService: ConfigService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.bookingForm = this.formBuilder.group({
      roomId: new FormControl({ value: '1', disabled: false }, { validators: [Validators.required] }),
      guestEmail: new FormControl('',{updateOn: 'blur', validators: [Validators.required, Validators.email] }),
      checkIn: new FormControl(''),
      checkOut: new FormControl(''),
      bookingStatus: new FormControl(''),
      bookingAmount: new FormControl(''),
      bookingDate: new FormControl(''),
      guests: this.formBuilder.array([this.formBuilder.group({
        name: new FormControl('', { validators:[Validators.required]}),
        age: new FormControl('')
      })]),
      guestDetails: this.formBuilder.group({
        guestName: new FormControl('', { validators:[Validators.required]}),
        guestAddress: new FormControl('', {validators: [Validators.required]}),
        mobileNumber: new FormControl('', { updateOn: 'blur' }),
      }),
      tnc: new FormControl(false, {validators: [Validators.requiredTrue]})
    })
    this.getBookingData()
    this.bookingForm.valueChanges.subscribe((data) => { 
      console.log(data)
    })
  }

  getBookingData(){
    this.bookingForm.patchValue({
      roomId: '1',
      guestEmail: 'h@g.co',
  })
}

  addBooking() {
    console.log(this.bookingForm.getRawValue());
    this.bookingForm.reset()
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

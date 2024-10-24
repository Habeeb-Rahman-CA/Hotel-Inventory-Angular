import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ConfigService } from '../services/config.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatExpansionModule, MatIconModule],
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
      roomId: new FormControl({ value: '2', disabled: true }),
      guestEmail: new FormControl(''),
      checkIn: new FormControl(''),
      checkOut: new FormControl(''),
      bookingStatus: new FormControl(''),
      bookingAmount: new FormControl(''),
      bookingDate: new FormControl(''),
      guests: this.formBuilder.array([this.formBuilder.group({
        name: new FormControl(''),
        age: new FormControl('')
      })]),
      guestDetails: this.formBuilder.group({
        guestName: new FormControl(''),
        guestAddress: new FormControl(''),
        mobileNumber: new FormControl(''),
      })
    })
  }

  addBooking() {
    console.log(this.bookingForm.getRawValue());
  }

  addGuest() {
    this.guests.push(
      this.formBuilder.group({
        name: new FormControl(''),
        age: new FormControl('')
      })
    )
  }

  addPassport() {
    this.bookingForm.addControl('passport', new FormControl(''))
  }

  deletePassport() {
    this.bookingForm.removeControl('passport')
  }

}

import { Component } from '@angular/core';
import { FormGroup, FormsModule, NgForm } from '@angular/forms';
import { RoomsList } from '../rooms';
import { CommonModule } from '@angular/common';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'app-rooms-add',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './rooms-add.component.html',
  styleUrl: './rooms-add.component.css'
})
export class RoomsAddComponent {

  successMessage: string = ''

  room: RoomsList = {
    roomType: '',
    amenities: '',
    checkInTime: new Date(),
    checkOutTime: new Date(),
    photos: '',
    price: 0,
    rating: 1
  }

  constructor(private roomService: RoomsService, ){}

  addRoom(){
    this.roomService.addRoom(this.room).subscribe((data) => (this.successMessage = 'Room Added Successfully'))
  }
}

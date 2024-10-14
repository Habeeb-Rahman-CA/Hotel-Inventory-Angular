import { Component, OnInit } from '@angular/core';
import { Rooms, RoomsList } from './rooms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RoomsListComponent } from './rooms-list/rooms-list.component';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule, FormsModule, RoomsListComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent implements OnInit {
  hotelName = 'Marjan Hotel';
  numberOfRooms = 10
  hideRooms = false

  room: Rooms = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }

  roomList: RoomsList[] = []

  ngOnInit(): void {
    this.roomList = [{
      roomNumber: 101,
      roomType: 'Deluxe Room',
      amenities: 'Air conditioner, Free Wifi, TV',
      price: 500,
      photos: 'https://media.istockphoto.com/id/1482326431/photo/interior-bedroom-wall-mockup-3d-rendering-3d-illustration.jpg?s=1024x1024&w=is&k=20&c=-_XHOAGB-hqt1vQ8vOtm7sebCCTHtl4mAR4Yuph-HyI=',
      checkInTime: new Date('11-Nov-2024'),
      checkOutTime: new Date('12-Nov-2024'),
      rating: 4.534,
    }, {
      roomNumber: 102,
      roomType: 'Luxury Room',
      amenities: 'Air conditioner, Free Wifi, TV, Bathroom, Kitchen',
      price: 1500,
      photos: 'https://media.istockphoto.com/id/1482326431/photo/interior-bedroom-wall-mockup-3d-rendering-3d-illustration.jpg?s=1024x1024&w=is&k=20&c=-_XHOAGB-hqt1vQ8vOtm7sebCCTHtl4mAR4Yuph-HyI=',
      checkInTime: new Date('21-Nov-2024'),
      checkOutTime: new Date('22-Nov-2024'),
      rating: 3.3789,
    }, {
      roomNumber: 103,
      roomType: 'Private Suite',
      amenities: 'Free Wifi, TV',
      price: 300,
      photos: 'https://media.istockphoto.com/id/1482326431/photo/interior-bedroom-wall-mockup-3d-rendering-3d-illustration.jpg?s=1024x1024&w=is&k=20&c=-_XHOAGB-hqt1vQ8vOtm7sebCCTHtl4mAR4Yuph-HyI=',
      checkInTime: new Date('1-Nov-2024'),
      checkOutTime: new Date('2-Nov-2024'),
      rating: 4.123,
    }]
  }

  toggle() {
    this.hideRooms = !this.hideRooms
  }
}

import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Rooms, RoomsList } from './rooms';
import { CommonModule } from '@angular/common';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule, RoomsListComponent, HeaderComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {
  
  hotelName = 'Marjan Hotel';
  numberOfRooms = 10
  hideRooms = false

  selectedRooms!: RoomsList

  room: Rooms = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }

  @ViewChild(HeaderComponent) headerComponent! : HeaderComponent

  @ViewChildren(HeaderComponent) headerChildren! : QueryList<HeaderComponent>

  title = 'Room List'

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

  ngDoCheck(): void {
      console.log('change are made');
  }

  ngAfterViewInit(): void {
      this.headerComponent.title = this.hotelName
  }

  ngAfterViewChecked(): void {
      
  }

  toggle() {
    this.hideRooms = !this.hideRooms
    this.title = 'Rooms List'
  }

  selectRoom(room: RoomsList) {
    this.selectedRooms = room
  }

  addRoom() {
    const room: RoomsList = {
      roomNumber: 104,
      roomType: '1BHK',
      amenities: 'One bed, Fan',
      price: 150,
      photos: 'https://media.istockphoto.com/id/1482326431/photo/interior-bedroom-wall-mockup-3d-rendering-3d-illustration.jpg?s=1024x1024&w=is&k=20&c=-_XHOAGB-hqt1vQ8vOtm7sebCCTHtl4mAR4Yuph-HyI=',
      checkInTime: new Date('15-Nov-2024'),
      checkOutTime: new Date('16-Nov-2024'),
      rating: 6.03
    }
    this.roomList = [...this.roomList, room]
  }
}

import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit, QueryList, SkipSelf, ViewChild, ViewChildren } from '@angular/core';
import { Rooms, RoomsList } from './rooms';
import { CommonModule } from '@angular/common';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';

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

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent

  @ViewChildren(HeaderComponent) headerChildren!: QueryList<HeaderComponent>

  title = 'Room List'

  roomList: RoomsList[] = []

  constructor(@SkipSelf()  private roomsServices: RoomsService) { }

  ngOnInit(): void {
    this.roomList = this.roomsServices.getRooms();
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

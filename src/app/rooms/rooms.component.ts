import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit, QueryList, SkipSelf, ViewChild, ViewChildren, OnDestroy } from '@angular/core';
import { Rooms, RoomsList } from './rooms';
import { CommonModule } from '@angular/common';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { catchError, map, Observable, of, Subject, Subscription } from 'rxjs';
import { HttpEventType } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ConfigService } from '../services/config.service';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule, RoomsListComponent, HeaderComponent, RouterModule, ReactiveFormsModule, FormsModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked, OnDestroy {

  hotelName = 'Marjan Hotel';
  numberOfRooms = 10

  hideRooms = true

  priceFilter = new FormControl(0)

  selectedRooms!: RoomsList

  rooms: Rooms = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent

  @ViewChildren(HeaderComponent) headerChildren!: QueryList<HeaderComponent>

  title = 'Room List'

  roomList: RoomsList[] = []

  stream = new Observable(observer => {
    observer.next('user1')
    observer.next('user2')
    observer.next('user3')
    observer.complete()
    // observer.error('error')
  })

  totolBytes = 0

  subscription !: Subscription


  constructor(@SkipSelf() private roomsService: RoomsService, private configService:ConfigService ) { }

 

  ngOnInit(): void {

    this.roomsService.getPhotos().subscribe((event) => {
      switch (event.type) {
        case HttpEventType.Sent: {
          console.log('Request has been made');
          break
        }
        case HttpEventType.ResponseHeader: {
          console.log('Response success');
          break
        }
        case HttpEventType.DownloadProgress: {
          this.totolBytes += event.loaded
          break
        }
        case HttpEventType.Response: {
          console.log(event.body);
        }
      }
    })

    this.stream.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('complete'),
      error: (err) => console.log(err)
    })
    // this.roomsServices.getRooms$().subscribe((rooms) => {
    //   this.roomList = rooms
    // })
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
      roomNumber: "104",
      roomType: '1BHK',
      amenities: 'One bed, Fan',
      price: 150,
      photos: 'https://media.istockphoto.com/id/1482326431/photo/interior-bedroom-wall-mockup-3d-rendering-3d-illustration.jpg?s=1024x1024&w=is&k=20&c=-_XHOAGB-hqt1vQ8vOtm7sebCCTHtl4mAR4Yuph-HyI=',
      checkInTime: new Date('15-Nov-2024'),
      checkOutTime: new Date('16-Nov-2024'),
      rating: 6.03
    }
    this.roomsService.addRoom(room).subscribe((data) => {
      this.roomList = data
    })
  }

  editRoom() {
    const room: RoomsList = {
      roomNumber: "105",
      roomType: '1BHK',
      amenities: 'One bed, Fan',
      price: 150,
      photos: 'https://media.istockphoto.com/id/1482326431/photo/interior-bedroom-wall-mockup-3d-rendering-3d-illustration.jpg?s=1024x1024&w=is&k=20&c=-_XHOAGB-hqt1vQ8vOtm7sebCCTHtl4mAR4Yuph-HyI=',
      checkInTime: new Date('15-Nov-2024'),
      checkOutTime: new Date('16-Nov-2024'),
      rating: 6.03
    }
    this.roomsService.editRoom(room).subscribe((data) => {
      this.roomList = data
    })
  }

  deleteRoom() {
    this.roomsService.deleteRoom('3').subscribe((data => {
      this.roomList = data
    }))
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }
}




//Normal working
// getData -> addData -> getData

//RxJs Working
//getData -> continous streams of data -> addData
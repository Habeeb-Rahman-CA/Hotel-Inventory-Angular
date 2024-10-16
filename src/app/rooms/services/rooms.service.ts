import { Inject, Injectable } from '@angular/core';
import { RoomsList } from '../rooms';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { AppConfig } from '../../AppConfig/appconfig.interface';

@Injectable({
  providedIn: 'root'
})

export class RoomsService {

  roomList: RoomsList[] = [{
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

  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig ) {
    console.log(this.config.apiUrl);
    console.log('Rooms servies are injecting...');
  }

  getRooms(){
    return this.roomList
  }

}
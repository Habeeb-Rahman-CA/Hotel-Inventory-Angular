import { Inject, Injectable } from '@angular/core';
import { Rooms, RoomsList } from '../rooms';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { AppConfig } from '../../AppConfig/appconfig.interface';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RoomsService {

  roomList: RoomsList[] = []

  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig, private http: HttpClient ) {
    console.log(this.config.apiEndpoint);
    console.log('Rooms servies are injecting...');
  }

  getRooms(){
    return this.http.get<RoomsList[]>('/api/rooms')
  }

  addRoom(room: RoomsList){
    return this.http.post<RoomsList[]>('/api/rooms', room)
  }

  editRoom(room: RoomsList){
    return this.http.put<RoomsList[]>(`/api/rooms/${room.roomNumber}`, room)
  }

  deleteRoom(id: string){
    return this.http.delete<RoomsList[]>(`/api/rooms/${id}`)
  }

  getPhotos() {
    const request = new HttpRequest('GET', `https://jsonplaceholder.typicode.com/photos`, {
      reportProgress: true,
    })
    return this.http.request(request)
  }

}
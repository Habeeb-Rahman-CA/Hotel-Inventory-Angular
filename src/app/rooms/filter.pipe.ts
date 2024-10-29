import { Pipe, PipeTransform } from '@angular/core';
import { RoomsList } from './rooms';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(rooms: RoomsList[], price: number): unknown {
    return rooms.filter((rooms) => rooms.price <= price);
  }

}

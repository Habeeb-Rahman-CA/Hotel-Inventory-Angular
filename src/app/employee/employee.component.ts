import { Component, Self } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
  // providers: [RoomsService]
})

export class EmployeeComponent {
  empName: string = 'Habeeb'

  constructor(private roomsService: RoomsService) {
  }
}

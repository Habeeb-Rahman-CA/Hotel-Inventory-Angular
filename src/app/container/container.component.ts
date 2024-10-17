import { AfterContentInit, Component, ContentChild } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { CommonModule } from '@angular/common';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent implements AfterContentInit {

  @ContentChild(EmployeeComponent) employee!: EmployeeComponent

  constructor() { }

  ngAfterContentInit(): void {
    this.employee.empName = "Rahman"
  }

}

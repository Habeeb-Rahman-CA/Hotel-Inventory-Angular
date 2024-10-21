import { AfterViewInit, Component, ElementRef, Inject, OnInit, Optional, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { RoomsComponent } from "./rooms/rooms.component";
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoggerService } from './logger.service';
import { localStorageToken } from './localstorage.token';
import { AppNavComponent } from './app-nav/app-nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RoomsComponent, ContainerComponent, EmployeeComponent, RouterModule, AppNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Hotel Inventory';

  @ViewChild('name', { static: true }) name!: ElementRef

  constructor(@Optional() private loggerService: LoggerService,
    @Inject(localStorageToken) private localStorage: any) { }

  ngOnInit(): void {
    this.localStorage.setItem('name', 'Marjan Hotel')
    this.name.nativeElement.innerText = 'Marjan Hotel'
    this.loggerService.log('AppComponent.ngOnInit()')
    
  }


  //   @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef

  //   ngAfterViewInit(): void {
  //     const componentRef = this.vcr.createComponent(RoomsComponent)
  //     componentRef.instance.numberOfRooms = 20
  //   }
}

import { Component, Input, OnInit } from '@angular/core';
import { RoomsList } from '../rooms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rooms-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.css'
})
export class RoomsListComponent implements OnInit {

  @Input() rooms: RoomsList[] = []

  ngOnInit(): void {

  }

}

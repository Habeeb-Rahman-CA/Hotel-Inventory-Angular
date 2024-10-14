import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RoomsList } from '../rooms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rooms-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit {

  @Input() rooms: RoomsList[] = [];

  @Output() selectedRoom = new EventEmitter<RoomsList>();

  ngOnInit(): void {

  }

  selectRoom(room: RoomsList){
    this.selectedRoom.emit(room)
  }

}

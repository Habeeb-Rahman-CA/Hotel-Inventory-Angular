import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
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
export class RoomsListComponent implements OnInit, OnChanges, OnDestroy {

  @Input() rooms: RoomsList[] | null = [];

  @Input() title: string = ''

  @Output() selectedRoom = new EventEmitter<RoomsList>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes['title']) {
      this.title = changes['title'].currentValue.toUpperCase()
    }
  }

  ngOnInit(): void {

  }

  selectRoom(room: RoomsList) {
    this.selectedRoom.emit(room)
  }

  ngOnDestroy(): void {
    console.log("on destroy is called");
  }


}

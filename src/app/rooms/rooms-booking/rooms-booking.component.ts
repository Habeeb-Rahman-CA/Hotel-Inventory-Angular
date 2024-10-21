import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-rooms-booking',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './rooms-booking.component.html',
  styleUrl: './rooms-booking.component.css'
})
export class RoomsBookingComponent implements OnInit {

  id: number = 0

  id$ !: Observable<number>

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    // this.id = this.router.snapshot.params['id'];
    this.id$ = this.router.paramMap.pipe(
      map(params => {
        const id = params.get('id')
        return id ? Number(id) : 0
      })
    )

    // this.router.paramMap.subscribe((params) => { params.get('id')})
  }

}

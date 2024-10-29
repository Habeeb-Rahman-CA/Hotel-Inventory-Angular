import { Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { RoomsComponent } from './rooms/rooms.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RoomsBookingComponent } from './rooms/rooms-booking/rooms-booking.component';
import { RoomsAddComponent } from './rooms/rooms-add/rooms-add.component';
import { LoginComponent } from './login/login.component';
import { loginGuard } from './guards/login.guard';
import { roomGuard } from './rooms/guards/room.guard';
import { bookingGuard } from './booking/guard/booking.guard';
import { CommentsComponent } from './comments/comments.component';

export const routes: Routes = [
    { path: 'employee', component: EmployeeComponent, canActivate: [loginGuard] },
    {
        path: 'rooms', loadComponent: () => import('./rooms/rooms.component').then(m => m.RoomsComponent), canActivate: [loginGuard], canActivateChild: [roomGuard],
        children: [
            { path: ':id', component: RoomsBookingComponent }
        ]
    },
    { path: 'add', component: RoomsAddComponent, canActivate: [loginGuard] },
    {
        path: 'booking', loadComponent: () => import('./booking/booking.component').then(m => m.BookingComponent), canActivate: [loginGuard], canDeactivate: [bookingGuard]

    },
    { path: 'login', component: LoginComponent },
    { path: 'comments', component: CommentsComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', component: NotfoundComponent }
];

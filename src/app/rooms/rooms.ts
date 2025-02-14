export interface Rooms{
    totalRooms : number;
    availableRooms : number;
    bookedRooms : number;
}

export interface RoomsList {
    roomNumber? : string;
    roomType : string;
    amenities : string;
    price : number;
    photos : string;
    checkInTime : Date;
    checkOutTime : Date;
    rating : number;
}
export interface booking{
    roomId: string;
    guestEmail: string;
    checkIn: Date;
    checkOut: Date;
    bookingStatus: string;
    bookingAmount: string;
    bookingDate: Date;
    guestCount: number;
    guestName: string;
    guestAddress: string;
    mobileNumber: number;
    guestList: []
}
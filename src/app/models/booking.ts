export interface Booking{
    isBooking: boolean;
    userId: string;
    artistId: string;
    bookingDate: Date;
    price: number;
    isConfirmed: boolean;
}
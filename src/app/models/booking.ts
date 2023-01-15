export interface Booking{
    type: string;
    userId: string;
    artistId: string;
    bookingDate: Date;
    price: number;
    bookingStatus: boolean;
}
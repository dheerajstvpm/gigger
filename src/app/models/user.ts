export interface User {
    _id?: string;
    name?: string;
    username?: string;
    password?: string;
    artistFlag?: boolean;
    blockStatus?: boolean;
    aboutMe?: string;
    eventPricing?: number,
    profileImage?: string;
    tracks?: [{ name: string, albumArt: string }];
    videos?: [{ name: string, thumbnail: string }];
    eventBookings?: [{
        userId?: string,
        artistId?: string,
        bookingDate?: string,
        price?: number,
        isConfirmed: boolean
    }];
    favouriteTracks?: [string];
    favouriteArtists?: [string];
    favouriteVideos?: [string];
    bookedHistory?: [];
    loginError?: string;
}
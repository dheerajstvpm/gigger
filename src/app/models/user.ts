export interface User {
    _id?: string;
    name?: string;
    username: string;
    password: string;
    artistFlag?: boolean;
    blockStatus?:boolean;
    aboutMe?: string;
    soloEventPricing?: Number,
    bandEventPricing?: Number,
    profileImage?: string;
    tracks?: [{ name: string, albumArt?: string }];
    videos?: [{ name: string, thumbnail?: string }];
    eventBookings?: [];
    favouriteTracks?: [];
    favouriteArtists?: [];
    favouriteVideos?: [];
    bookedHistory?: []
}
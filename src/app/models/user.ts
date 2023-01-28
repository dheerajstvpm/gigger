export interface User {
    _id?: string;
    name?: string;
    username: string;
    mobile?: number;
    password: string;
    artistFlag?: boolean;
    aboutMe?: string;
    profileImage?: string;
    tracks?: [{ name: string, albumArt?: string }];
    videos?: [{ name: string }];
}
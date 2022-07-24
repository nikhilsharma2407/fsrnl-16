export interface IUser {
    isLoggedIn: boolean | null;
    username: string;
    name: string;
    friendList: string[]
}

export interface IFriend {
    id: string;
    picture: string;
    title: string;
    firstName: string;
    lastName: string;
}
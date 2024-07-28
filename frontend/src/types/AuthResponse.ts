export interface ILogin {
    token: string,
    user: {
        id: number
    }
}

export interface IUser {
    id: number,
    name: string,
    email: string,
    avatar_url: string,
}
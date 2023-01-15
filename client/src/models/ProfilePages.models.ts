export interface User {
    createdAt: string;
    email: string;
    images: string;
    password: string;
    updatedAt: string;
    username: string;
    __v: number;
    _id: string;
}

export interface IUsersPost {
    _id: string;
    userId: string;
    username: string;
    des: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
  
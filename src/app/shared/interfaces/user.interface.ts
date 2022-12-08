import { Roles } from "../types/types";

export interface IUser {
  id: number,
  userName: string,
  email: string,
  roles: Roles[]
}

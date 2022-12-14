import { Roles } from "../types/types";

export interface IUser {
  id: string,
  userName: string,
  email: string,
  roles: Roles[]
}
